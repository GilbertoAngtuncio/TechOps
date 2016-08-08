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
      sugestion = "strongly recommended to sale and ready to show in your institution or classroom"
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
      $("div.marketing_questions").html( "<div><h3>Congratulations</h3><p>Your questionare result is <strong>"+final_result+"</strong> and this means that your product is <strong>"+sugestion+"</strong> to be sold.</p></div>" );
   }
   
}

answers_tech = {};
progress_tech = 1;
final_result_tech = 0;
div_progress_bar_tech = $("div.progress-bar-tech");
question_number_progress_tech = $('#question_number_progress_tech');
progress_text_tech = $(div_progress_bar_tech).first();

function goToNextQuestionTech(cur_question_number_tech){
   curr_question_tech = $('#question-tech-'+cur_question_number_tech);
   answers_tech[cur_question_number_tech] = $('input[name=alternative-'+cur_question_number_tech+']:checked', curr_question_tech).val();
   final_result_tech += parseInt(answers_tech[cur_question_number_tech]);
   console.log("respondida a questão: " + cur_question_number_tech + ", agora o valor das respostas é: "+answers_tech);
   curr_question_tech.removeClass("question_tech_active");
   curr_progress_tech = (progress_tech / $.cookie("numQuestionsTech"))*100;
   div_progress_bar_tech.css("width", curr_progress_tech+"%");
   progress_text_tech.html(curr_progress_tech+"% Complete");
   next_question_tech = curr_question_tech.next();
   if(next_question_tech.length){
      next_question_tech.addClass("question_tech_active");
      progress_tech++;
      question_number_progress_tech.html( progress_tech+' / '+$.cookie("numQuestionsTech") );
   }else{
      num_aswers_tech = answers_tech.length;      
      sugestion = "strongly recommended to sale and ready to show in your institution or classroom"
      if( final_result_tech > 12 )
      {
        sugestion_tech = "strongly recommended";
      }else{
        if (final_result_tech > 8) {
          sugestion_tech = "recommended";
        }else{
          if (final_result_tech > 4) {
            sugestion_tech = "not recommended"
          };
        }
      };
      $("div.tech_questions").html( "<div><h3>Congratulations</h3><p>Your questionare result is <strong>"+final_result_tech+"</strong> and this means that your product is <strong>"+sugestion_tech+"</strong> to be sold.</p></div>" );
   }
   
}