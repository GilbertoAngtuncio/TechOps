 "num":1,
      "question":"Do you like the...?",
      "feedback":"Yep, but remember when...",
      "final-feedback":"In the answer 1, you select the option that said...",
      "option-a":"Yes",
      "option-b":"Nope",
      "option-c":"Maybe",
      "option-d":"Gotcha",
   }
////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////
function question_data(_descripcion_titulo, _cerrar_descripcion, _cerrar_ventana_thumb, _mini_publicacion, _block, _booktrailer, _block_thumb, _cerrar_ventana, _libro, _tabs  ) {

var $descripcion_titulo = $(_descripcion_titulo);
var $cerrar_descripcion_titulo = $(_cerrar_descripcion);
var $cerrar_ventana_thumb = $(_cerrar_ventana_thumb);
var $miniaturas_publicacion = $(_mini_publicacion);
var $block = $(_block);
var $booktrailer = $(_booktrailer);
var $block_thumb = $(_block_thumb);
var $cerrar_ventana = $(_cerrar_ventana);
var $libro = $(_libro);
var $tabs = $(_tabs);


$descripcion_titulo.addClass('descripcion_titulo');
$cerrar_descripcion_titulo.addClass('cerrar_descripcion_titulo');
$cerrar_ventana_thumb.addClass('cerrar-ventana');
$miniaturas_publicacion.addClass("booktrailer");
$block.addClass("block");
$booktrailer.addClass("booktrailer");
$block_thumb.addClass("block");
$cerrar_ventana.addClass("cerrar-ventana");
$tabs.tabs().addClass("tabs-min");


$descripcion_titulo.hide();
$libro.click(function() {
	$descripcion_titulo.slideToggle();
})
$cerrar_descripcion_titulo.click(function(){
	$descripcion_titulo.slideUp();
})
$block_thumb.hide();
$miniaturas_publicacion.click(function(){
	$block_thumb.slideToggle("slow");
});
$cerrar_ventana_thumb.click(function(){
	$block_thumb.slideUp();
})

$block.hide();
$booktrailer.click(function(){
	$block.slideToggle("slow");
});
$cerrar_ventana.click(function(){
	$block.slideToggle("slow");
});

 }
////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////
