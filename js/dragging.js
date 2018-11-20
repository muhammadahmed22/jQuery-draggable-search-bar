// --------------------------------------------------------------------
// Drag container element on mouse action
// --------------------------------------------------------------------

(function($) {
  $.fn.drags = function(action) {

    action = $.extend({handle:"",cursor:"move"}, action);

    if(action.handle === "") {
      var $el = this;
    } else {
      var $el = this.find(action.handle);
    }

    return $el.css('cursor', action.cursor).on("mousedown", function(e) {
      if(action.handle === "") {
        var $drag = $(this).addClass('draggable');
      } else {
        var $drag = $(this).addClass('handle-active').parent().addClass('draggable');
      }
      var z_idx = $drag.css('z-index'),
        drg_h = $drag.outerHeight(),
        drg_w = $drag.outerWidth(),
        pos_y = $drag.offset().top + drg_h - e.pageY,
        pos_x = $drag.offset().left + drg_w - e.pageX;
      $drag.css('z-index', 1000).parents().on("mousemove", function(e) {
        $('.draggable').offset({
          top:e.pageY + pos_y - drg_h,
          left:e.pageX + pos_x - drg_w
        }).on("mouseup", function() {
          $(this).removeClass('draggable').css('z-index', z_idx);
        });
      });
    }).on("mouseup", function() {
      if(action.handle === "") {
        $(this).removeClass('draggable');
      } else {
        $(this).removeClass('handle-active').parent().removeClass('draggable');
      }
    });

  }
})(jQuery);

$('#container').drags();