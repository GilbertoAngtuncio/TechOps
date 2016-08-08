//Created by: Gilberto Angtuncio
//gilberto.angtuncio@pearson.com
//gilberto.unam@gmail.com

$( document ).ready(function() {


	$(function() {
		getJson();
	});

	var getJson = function(){

		$.getJSON('js/questions.json', function(data){

///Objeto para el libro
var template_questions = 

'{{#marketing_questions}}'+
'<div id="question-{{num}}" order="{{num}}" class="question showQuestion">'+
'<h4 class="pregunta-{{num}}">{{num}}. {{question}}</h4>'+
'<p>Responde con la opción que consideres correcta: </p>'+
'<ul id="aswer-options-{{num}}" class="option-{{num}}">'+
'<li class="a"><input type="radio" value="{{option-a.value}}" name="alternative-{{num}}" checked> {{option-a.aswer}}</input></li>'+
'<li class="b"><input type="radio" value="{{option-b.value}}" name="alternative-{{num}}"> {{option-b.aswer}}</input></li>'+
'<li class="c"><input type="radio" value="{{option-c.value}}" name="alternative-{{num}}"> {{option-c.aswer}}</input></li>'+
'<li class="d"><input type="radio" value="{{option-d.value}}" name="alternative-{{num}}"> {{option-d.aswer}}</input></li>'+
'</ul>'+
'<div class="feedback">'+
'{{feedback}}'+
'</div>'+
'<div class="final-feedback">'+
'{{final-feedback}}'+
'</div>'+
'<button class="btn btn-success orange siguiente_{{num}}" onclick="goToNextQuestion({{num}})">Next question</button>'+
'</div>'+
'{{/marketing_questions}}';

var html = Mustache.to_html(template_questions, data);
currNumQuestions = data.marketing_questions.length;
//$.cookie( "numQuestions", data.marketing_questions.length );
$('div.marketing_questions').html( html );
$('#question-1').addClass("question_active");
$('#question_number_progress').html( '1 / '+ data.marketing_questions.length );

/*$('.ios_url_app, .android_url_app, .booktrailer, .url_venta_ecommerce, .url_venta_ebook, .url_guia_del_profesor, .booktrailer, .miniaturas_publicacion').tooltip({
			track: true,
			show: {
				effect: "slideDown",
				delay: 250
			}
		})
		*/

// $( "button" ).click(function() {
//   $( "div" ).each(function( index, element ) {
//     // element == this
//     $( element ).css( "backgroundColor", "yellow" );
//     if ( $( this ).is( "#stop" ) ) {
//       $( "span" ).text( "Stopped at div index #" + index );
//       return false;
//     }
//   });
// });

/////////////////////***********************/////////////////////////////////////////***********************////////////////////
/////////////////////***********************/////////////////////////////////////////***********************////////////////////

//catalogoSerie( '.descripcion-titulo-1', '.cerrar-descripcion-titulo-1', '#cerrar-ventana-thumb-1', ".miniaturas_publicacion-1", "#block-1", ".booktrailer-1", "#block-thumb-1", "#cerrar-ventana-1", '.libro-1', "#tabs-min-1"   )

})

}

});


