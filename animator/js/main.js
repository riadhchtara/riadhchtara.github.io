$(document).ready(function () {
    $('#jstree').jstree();
    $('#jstree').on("changed.jstree", function (e, data) {



        console.log(data.selected);
    });


    $("#menu").menu();

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




    $(".widget input[type=submit], .widget a, .widget button").button();
    $("button, input, a").on("click", function (event) {
        event.preventDefault();
    });
})