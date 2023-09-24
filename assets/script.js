$(document).ready(function () {
    // loader
    setTimeout(function () {
        $('#loader').css({"display":"none"});
        $('.wrapper').css({"display":"block"});
    }, 3000);
    setTimeout(function () {
        $('#sidebar').addClass('open');
        $('#sidebarCollapse').addClass('open');
        $('#content').addClass('open');
    }, 3200);


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
    // theme change 
    const theme = $('#theme');
    const changeTheme = $('#mode');

    changeTheme.on('change', function() {
        if ($(this).prop('checked')) {
        console.log("Checked");
        $('body').removeClass("dark").addClass("light");
        window.localStorage.setItem('mode', 'light');
        } else {
        console.log("Not Checked");
        $('body').removeClass("light").addClass("dark");
        window.localStorage.setItem('mode', 'dark');
        }
    });

    const mode = window.localStorage.getItem('mode');
    if (mode === 'dark') {
        changeTheme.prop('checked', false);
        $('body').removeClass("light").addClass("dark");
    } else if (mode === 'light') {
        changeTheme.prop('checked', true);
        $('body').removeClass("dark").addClass("light");
    }
    $('.moon').click(function() {
        var currentPosition = parseInt($(this).css('left'));
        var newPosition = currentPosition + 50; // Adjust the amount to move
    
        $(this).animate({ left: newPosition + 'px' }, 1000); // Adjust the duration as needed
      });

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