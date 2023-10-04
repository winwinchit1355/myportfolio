const words=["Win Win Chit","a Web Developer","a Freelancer"];
const dynamicText=$(".second-text");

let wordIndex=0;
let charIndex=0;
let isDeleting=false;

const typeEffect = () =>{
    const currentWord= words[wordIndex];
    const currentChar= currentWord.substring(0,charIndex);
    dynamicText.text(currentChar);
    dynamicText.addClass("stop-blinking");
    if(!isDeleting && charIndex < currentWord.length)
    {
        // If condition is true, remove the previous character
        charIndex++;
        setTimeout(typeEffect,200);
    }else if(isDeleting && charIndex > 0)
    {
        // If condition is true, remove the previous character
        charIndex--;
        setTimeout(typeEffect, 100);
    }else {
        // If word is deleted then switch to the next word
        isDeleting = !isDeleting;
        dynamicText.removeClass("stop-blinking");
        wordIndex = !isDeleting ? (wordIndex + 1) % words.length : wordIndex;
        setTimeout(typeEffect, 1200);
    }
}
$('#sidebarCollapse').on('click', function () {
    $('#sidebar, #content ,#overlay' ).toggleClass('open');
    $(this).toggleClass('open');
});
$('.menu-link').click(function(){
    $('.menu-link').removeClass('active');
    $(this).addClass('active');
})
// theme change 
const changeTheme = $('#mode');

changeTheme.on('change', function() {
    if ($(this).prop('checked')) {
    // console.log("Checked");
    $('body').removeClass("dark").addClass("light");
    darkToLight();
    window.localStorage.setItem('mode', 'light');
    } else {
    // console.log("Not Checked");
    $('body').removeClass("light").addClass("dark");
    lightToDark();
    window.localStorage.setItem('mode', 'dark');
    }
});
function darkToLight(){
    $('#moon').removeClass('fa-spin');
    $('#sun').addClass('fa-spin');
}
function lightToDark(){
    $('#sun').removeClass('fa-spin');
    $('#moon').addClass('fa-spin');
}
// get click event outside sidebar
$('#overlay').on('click',function(){
    // const viewportWidth = window.innerWidth || document.documentElement.clientWidth;
    // console.log(viewportWidth)
    // if(viewportWidth < 768)
    // {
        $('#sidebar,#sidebarCollapse,#content,#overlay').removeClass('open');
    // }
});
$(document).ready(function () {

    $('.home-link').addClass('active');
    
    // loader
    setTimeout(function () {
        $('#loader').css({"display":"none"});
        $('.wrapper').css({"display":"block"});
    }, 3000);
    setTimeout(function () {
        $('#sidebar').addClass('open');
        $('#sidebarCollapse').addClass('open');
        $('#content').addClass('open');
        $('.download-cv').addClass('downup-animation');
        const mode = window.localStorage.getItem('mode');
        if (mode === 'light') {
            changeTheme.prop('checked', true);
            $('body').removeClass("dark").addClass("light");
            darkToLight();
        }else{
            changeTheme.prop('checked', false);
            $('body').removeClass("light").addClass("dark");
            lightToDark();
        }
        
        $('.intro-text').css({
            opacity: 1,
            transform: 'translateY(0)',
        });
    }, 3200);

    $("#sidebar").mCustomScrollbar({
        theme: "minimal"
    });


    // $('#moon').click(function() {
    //     var currentPosition = parseInt($(this).css('left'));
    //     var newPosition = currentPosition + 50; // Adjust the amount to move
    
    //     $(this).animate({ left: newPosition + 'px' }, 1000); // Adjust the duration as needed
    //   });

    // $('.second-text').on('animationend webkitAnimationEnd', function() {
    //     // After the typing animation, show the intro-text
    //     $('.intro-text').css({
    //         opacity: 1,
    //         transform: 'translateY(0)',
    //     });
    // });
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
            if (scrollY >= (sectionTop-400)) {
                // Remove 'active' class from all menu items
                menuItems.removeClass('active');
                // Add 'active' class to the corresponding menu item
                menuItems.eq(index).addClass('active');
            }
        });
        
    });
    
    typeEffect();

    // animaiton effect on scroll
    // Function to check if an element is in the viewport
    function isElementInViewport(elem) {
        const rect = elem.getBoundingClientRect();
        return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    // Function to add animation class when element is in viewport
    function animateElements() {
        $(".w-timeline-item").each(function () {
        if (isElementInViewport(this)) {
            $(this).removeClass("opacity-0");
            $(this).addClass("downup-animation");
            }
        });

        $(".project-card").each(function () {
            if (isElementInViewport(this)) {
                $(this).removeClass("opacity-0");
                $(this).addClass("downup-animation");
                }
            });
    }

    // Check for animations when scrolling
    $(window).on("scroll", function () {
        animateElements();
    });


        
});
