// JavaScript Document
// JavaScript Document
//Top menu section JS
(function ($) {
            "use strict";
            var PUS = {};
                /*==========================================
                        :: slicknav
                ==========================================*/
                PUS.slicknav = function () {
                    $("#main-menu").slicknav({
                        allowParentLinks: true,
                        prependTo: '#mobile-menu-wrap',
                        label: '',
                    });

                    $(".mobile-menu-trigger").on("click", function(e) {
                        $(".mobile-menu-container").addClass("menu-open");
                        e.stopPropagation();
                    });

                    $("#mobile-menu-wrap ul li a").on("click", function(e) {
                        $(".mobile-menu-container").removeClass("menu-open");
                        e.stopPropagation();
                    });

                    $(".mobile-menu-close").on("click", function(e) {
                        $(".mobile-menu-container").removeClass("menu-open");
                        e.stopPropagation();
                    });  
                };
                $(document).ready(function () {
                    PUS.slicknav();
                });
            })(jQuery);

window.onscroll = function() {myFunction()};

var header = document.getElementById("myHeader");
var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}
//Top menu section JS


// ===== Scroll to Top ==== 
$(window).scroll(function() {
    if ($(this).scrollTop() >= 50) {        // If page is scrolled more than 50px
        $('#return-to-top').fadeIn(200);    // Fade in the arrow
    } else {
        $('#return-to-top').fadeOut(200);   // Else fade out the arrow
    }
});
$('#return-to-top').click(function() {      // When arrow is clicked
    $('body,html').animate({
        scrollTop : 0                       // Scroll to top of body
    }, 1000);
});	
// ===== Scroll to Top ==== 

/* Loader  */
$(function() {
    $(".preload").fadeOut(2500, function() {});
});
/* Loader  */


//Event Section Slider
$(document).ready(function() {
              var owl = $('.event_slider');
              owl.owlCarousel({
                items: 6,
                loop: true,
                margin: 30,
                autoplay: true,
                autoplayTimeout: 3000,
                autoplayHoverPause: true, 
				  responsive: {
                  0: {
                    items: 1
                  },
                  600: {
                    items: 2
                  },
                  1000: {
                    items: 3
                  }
                }
              });
	
              $('.play').on('click', function() {
                owl.trigger('play.owl.autoplay', [1000])
              })
              $('.stop').on('click', function() {
                owl.trigger('stop.owl.autoplay')
              })
            })
//Event Section Slider


/* navigation sub-menu display */

// Change 'hover' to 'click' if you want to
$('.gallery_menu li > .sub_menu').parent().hover(function() {
  var submenu = $(this).children('.sub_menu');
  if ( $(submenu).is(':hidden') ) {
    $(submenu).slideDown(200);
  } else {
    $(submenu).slideUp(':active');
  }
});



$("#main-menu  a[href^='#']").on('click', function(e) {

   // prevent default anchor click behavior
   e.preventDefault();

   // store hash
   var hash = this.hash;

   // animate
   $('html, body').animate({
       scrollTop: $(hash).offset().top
     }, 1500, function(){

       // when done, add hash to url
       // (default click behaviour)
       window.location.hash = hash;
     });

});
