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
    // sidebar menu scroll
    const menuItems = $('.sidebar-main .menu-items div a');
    const contentSections = $('#content section');
    $(window).scroll(function() {
        // Get the current scroll position
        const scrollY = $(window).scrollTop();

        // Iterate through content sections
        contentSections.each(function(index) {
            const sectionTop = $(this).offset().top;
            // Check if the section is in the viewport
            if (scrollY >= sectionTop) {
                // Remove 'active' class from all menu items
                menuItems.removeClass('active');
                // Add 'active' class to the corresponding menu item
                menuItems.eq(index).addClass('active');
            }
        });
    });
    
    
});