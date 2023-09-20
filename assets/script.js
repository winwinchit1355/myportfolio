$(document).ready(function () {
    $('#home-link').addClass('active');

    $("#sidebar").mCustomScrollbar({
        theme: "minimal"
    });

    $('#sidebarCollapse').on('click', function () {
        $('#sidebar, #content' ).toggleClass('active');
        $(this).toggleClass('active');
    });
    $('.menu-link').click(function(){
        $('.menu-link').removeClass('active');
        $(this).addClass('active');
    })
    $('.typing-text').on('animationend webkitAnimationEnd', function() {
        // After the typing animation, show the intro-text
        $('.intro-text').css({
            opacity: 1,
            transform: 'translateY(0)',
        });
    });
});