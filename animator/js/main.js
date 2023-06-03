$(document).ready(function () {
  $('#jstree').jstree();
  $('#jstree').on("changed.jstree", function (e, data) {



    console.log(data.selected);

  });

  function addUser() {
    var valid = true;
    dialog.dialog("close");

    return valid;
  };
  var dialog = $("#dialog0").dialog({
    autoOpen: false,
    height: 400,
    width: 350,
    modal: true,
    buttons: {
      "Create an account": addUser,
      Cancel: function () {
        dialog.dialog("close");
      }
    },
    close: function () {
      form[0].reset();
      allFields.removeClass("ui-state-error");
    }
  });
  $('#show').on('click', function () {

    dialog.dialog("open");

  });

  $("#menu").menu();

  $('button').on('click', function () {
    $('#jstree').jstree(true).select_node('child_node_1');
    $('#jstree').jstre; e('select_node', 'child_node_1');
    $.jstree.reference('#jstree').select_node('child_node_1');
  });
  $("#actions").tabs();
  $("#actions").draggable();
  $("#actions").resizable();
  $("#actions").width(200);
  console.log("riadh");




  $(".widget input[type=submit], .widget a, .widget button").button();
  $("button, input, a").on("click", function (event) {
    event.preventDefault();
  });
})