// --------------------------------------------------------------------
// Drag container element on mouse action
// --------------------------------------------------------------------

function endMove() {
    $(this).removeClass('movable');
}
function startMove() {
    $('div.movable').on('mousemove', function(event) {
        var thisX = event.pageX - $(this).width() / 2,
            thisY = event.pageY - $(this).height() / 2;

        $('.movable').offset({
            left: thisX,
            top: thisY
        });
    });
}
$(document).ready(function() {
    $("#container").on('mousedown', function() {
        $(this).addClass('movable');
        startMove();
    }).on('mouseup', function() {
        $(this).removeClass('movable');
        endMove();
    });

});