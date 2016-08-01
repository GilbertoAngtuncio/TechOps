
//$("#questionare_row").click(function() {
//  alert("Vai mudar")
//    var questionare = document.createElementNS('questionare_section.html', 'div')
//  $("body").prepend(questionare);
//});
$(function() {
  var $mainContent = $("#main-content"),
      $contentWrapper = $("#content-wrapper");

  $contentWrapper.height($contentWrapper.height());
  baseHeight = $contentWrapper.height() - $mainContent.height();

  function changePage(){
    $mainContent
      .find("#container")
      .fadeOut(200, function() {
          $mainContent.hide().load(newHash + " #container", function() {
              $mainContent.fadeIn(200, function() {
                    $contentWrapper.animate({
                        height: baseHeight + $mainContent.height() + "px"
                    });
                  });
              });
          });
  }


  $("section").delegate("a", "click", function() {
      window.location.hash = $(this).attr("href");
      return false;
  });

  $(window).bind('hashchange', function(){
    
      newHash = window.location.hash.substring(1);
      
      if (newHash) {
          $mainContent
            .find("#container")
            .fadeOut(200, function() {
                $mainContent.hide().load(newHash + " #container", function() {
                    $mainContent.fadeIn(200, function() {
                          $contentWrapper.animate({
                              height: baseHeight + $mainContent.height() + "px"
                          });
                        });
                    });
                });
        };
        
    });
    
    $(window).trigger('hashchange');

});