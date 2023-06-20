$(function(){
        var $win = $(window),
        w = 0,h = 0,
        opacity = 1,
        getWidth = function() {
            w = $win.width();
            h = $win.height();
        };

        $win.mousemove(function(e) {
            getWidth();
            opacity = (e.pageX/w * 0.4) + (e.pageY/h * 0.4);
            //console.log(opacity);
            $('#sky').css('opacity',opacity);

        });
    });
