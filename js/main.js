$(document).ready(function () {
  $("#actions").tabs();
  $("#actions").width(200);   
  console.log("riadh");
  $("#dialog0").dialog();
  $("#dialog1").dialog();
  $(".widget input[type=submit], .widget a, .widget button").button();
  $("button, input, a").on("click", function (event) {
    event.preventDefault();
  });
}); 