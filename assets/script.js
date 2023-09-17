

$(document).ready(function($) {
    setTimeout(function () {
        $('#loader').css({"display":"none"});
        $('#container').css({"display":"flex"});
    }, 3000);
    setTimeout(function () {
        $('.aside').addClass('open');
        $('.mobile-menu-toggle').addClass('open');
    }, 3200);
    $('.toggle').click(function(){
        $(this).toggleClass('active');
        if ($(this).hasClass('active')) {
            $('.aside').addClass('open');
            $('.aside').css('display', 'flex');
        } else {
            $('.aside').removeClass('open');
            $('.aside').css('display', 'none');
        }
    })
});