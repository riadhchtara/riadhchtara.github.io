$(document).ready(function () {
  $("#actions-div").width(200);   
  $("#actions").tabs();    
  console.log("riadh");
  $("#dialog0").dialog();
  $("#dialog1").dialog();
  $(".widget input[type=submit], .widget a, .widget button").button();
  $("button, input, a").on("click", function (event) {
    event.preventDefault();
  });
}); 