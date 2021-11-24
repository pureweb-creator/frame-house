$(document).ready(function(){
    $('.lazy').Lazy();

    var cursor = $(".cursor");
    var cursorDot = $(".cursor-dot");

    $(window).mousemove(function(e) {
        cursor.css({
            top: e.clientY - cursor.height() / 2,
            left: e.clientX - cursor.width() / 2
        });
    });

    $('.go_to').click( function(){
		var scroll_el = $(this).attr('href');
        var top = $(scroll_el).offset().top;
            if ($(scroll_el).length != 0) {
                $(this).parent().parent().parent().animate({ scrollTop: top }, 1000, $.bez([0.77,0,.175,1])); 
            }
	    return false; // выключаем стандартное действие
	});

    $(function() {
  
        $('ul.tabs__caption').on('click', 'li:not(.active)', function() {
          $(this)
            .addClass('active').siblings().removeClass('active')
            .closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
        });
        
      });


    if($(window).width() > 992)
        var height = $('.first-screen').height();
    if($(window).width() < 992)
        var height = $('#page').height() - 40;

    $('#leftBtn,.arrow_left').on('click', function(event){
        event.preventDefault();
        console.log(height);

        $('.side_left').addClass('expanded').removeClass('collapsed');
        $('.side_right').addClass('collapsed').removeClass('expanded');

        $('.side_left').animate({ scrollTop: height }, 1000, $.bez([0.77,0,.175,1])); 
    });

    $('#rightBtn,.arrow_right').on('click',function(event){
        event.preventDefault();
        console.log(height);

        $('.side_right').addClass('expanded').removeClass('collapsed');
        $('.side_left').addClass('collapsed').removeClass('expanded');

        $('.side_right').animate({ scrollTop: height }, 1000, $.bez([0.77,0,.175,1])); 
    });

    $(window)
        .mouseleave(function() {
            cursor.css({
                opacity: "0"
            });
        })
        .mouseenter(function() {
            cursor.css({
                opacity: "1"
            });
        });

    $(window)
        .mousedown(function() {
            cursor.css({
                transform: "scale(2)"
            });
        })
        .mouseup(function() {
            cursor.css({
                transform: "scale(1)"
            });
        });

    $('li, p, span, h1, h2, h3,button,a,.arrow')
        .mouseover(function() {
            cursor.css({
                transform: "scale(1.7)",
            });
        })
        .mouseleave(function() {
            cursor.css({
                transform: "scale(1)",
            });
        });

    $('.menu__link')
        .mouseover(function(){
            cursor.css({
                transform: "scale(1.1)",
            });
        })
        .mouseleave(function(){
            cursor.css({
                transform: "scale(1)",
            });
        });
});