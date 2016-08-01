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
'<div class="question-{{num}}">'+
'<h4 class="pregunta-{{num}}">{{question}}</h4>'+
'<p>Responde con la opción que consideres correcta: </p>'+
'<div class="option-{{num}}">'+
'<div class="a">{{option-a}}</div>'+
'<div class="b">{{option-b}}</div>'+
'<div class="c">{{option-c}}</div>'+
'<div class="d">{{option-d}}</div>'+
'</div>'+
'<div class="feedback">'+
'{{feedback}}'+
'</div>'+
'<div class="final-feedback">'+
'{{final-feedback}}'+
'</div>'+
'<div class="siguiente_{{num}}">Next question</div>'+
'</div>'+
'{{/marketing_questions}}';

var html = Mustache.to_html(template_questions, data);
$('.marketing_questions').html(html);

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
catalogoSerie( '.descripcion-titulo-1', '.cerrar-descripcion-titulo-1', '#cerrar-ventana-thumb-1', ".miniaturas_publicacion-1", "#block-1", ".booktrailer-1", "#block-thumb-1", "#cerrar-ventana-1", '.libro-1', "#tabs-min-1"   )


})

}

});


