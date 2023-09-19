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
});