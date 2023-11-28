// Modales
$(document).ready(function () {
    $(".clickable-div").click(function () {
        var targetModal = $(this).data("target");
        $(targetModal).modal("show");
    });
});
