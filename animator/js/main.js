$(document).ready(function () {
  // 6 create an instance when the DOM is ready
  $('#jstree').jstree();
  // 7 bind to events triggered on the tree
  $('#jstree').on("changed.jstree", function (e, data) {
    console.log(data.selected);
  });
  // 8 interact with the tree - either way is OK
  $('button').on('click', function () {
    $('#jstree').jstree(true).select_node('child_node_1');
    $('#jstree').jstree('select_node', 'child_node_1');
    $.jstree.reference('#jstree').select_node('child_node_1');
  });
  $("#actions").tabs();
  $("#actions").draggable();
  $("#actions").resizable();
  $("#actions").width(200);
  console.log("riadh");
  $("#dialog0").dialog();
  $("#dialog1").dialog();
  $(".widget input[type=submit], .widget a, .widget button").button();
  $("button, input, a").on("click", function (event) {
    event.preventDefault();
  });
});  