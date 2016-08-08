aswers = {};
progress = 1;
final_result = 0;
div_progress_bar = $("div.progress-bar");
question_number_progress = $('#question_number_progress');
progress_text = $(div_progress_bar).first();

function goToNextQuestion(cur_question_number){
   curr_question = $('#question-'+cur_question_number);
   aswers[cur_question_number] = $('input[name=alternative-'+cur_question_number+']:checked', curr_question).val();
   final_result += parseInt(aswers[cur_question_number]);
   console.log("respondida a questão: " + cur_question_number + ", agora o valor das respostas é: "+aswers);
   curr_question.removeClass("question_active");
   curr_progress = (progress / $.cookie("numQuestions"))*100;
   div_progress_bar.css("width", curr_progress+"%");
   progress_text.html(curr_progress+"% Complete");
   next_question = curr_question.next();
   if(next_question.length){
      next_question.addClass("question_active");
      progress++;
      question_number_progress.html( progress+' / '+$.cookie("numQuestions") );
   }else{
      num_aswers = aswers.length;      
      sugestion = "strongly not recommended"
      if( final_result > 12 )
      {
        sugestion = "strongly recommended";
      }else{
        if (final_result > 8) {
          sugestion = "recommended";
        }else{
          if (final_result > 4) {
            sugestion = "not recommended"
          };
        }
      };
      $("div.marketing_questions").html( "<div><h3>Congratulations</h3><p>Your questionare result is "+final_result+" and this means that your product is "+sugestion+" to be sold.</p></div>" );
   }
   
}