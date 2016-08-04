aswers = {};
progress = 0;
divProgressBar = $("div.progress-bar");
progressText = $(divProgressBar).first();

function goToNextQuestion(curQuestionNumber){
   currQuestion = $('#question-'+curQuestionNumber);
   aswers[curQuestionNumber] = $('input[name=alternative-'+curQuestionNumber+']:checked', currQuestion).val();
   console.log("respondida a questão: " + curQuestionNumber + ", agora o valor das respostas é: "+aswers);
   currQuestion.removeClass("question_active");
   progress++;
   currProgress = (progress / $.cookie("numQuestions"))*100;
   divProgressBar.css("width", currProgress+"%");
   progressText.html(currProgress+"% Complete");
   nextQuestion = currQuestion.next();
   if(nextQuestion.length){
      nextQuestion.addClass("question_active");
   }else{
      $("div.marketing_questions").html( "<div><h3>Congratulations</h3><p>Now we will process your answer.</p></div>" );
   }
   
}