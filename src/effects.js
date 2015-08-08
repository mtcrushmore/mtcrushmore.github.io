$(document).ready(function(){
  
  $('.dancer').on('click', function(event) {
    alert("I've been clicked.");
    for (var i = 0; i < 4; i++) {
      $(this).effect("shake");
      }
    $(this).effect("explode");
  });

});