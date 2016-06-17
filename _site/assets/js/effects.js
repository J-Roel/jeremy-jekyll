'use strict';
/*
	effects.js

	Contains the functionality for the scrolling fixed menu
	and the popup menu toggle

*/
$(document).ready(function(){


	/* Menu Pop up Toggle */	
	$('#popmenu').click( function(){
		$('#popup-menu').toggle('hide');
	});




	/* Smooth Scrolling */
	$(function() {
          $('a[href*="#"]:not([href="#"])').click(function() {
            if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
              var target = $(this.hash);
              target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
              if (target.length) {
                $('html, body').animate({
                  scrollTop: target.offset().top
                }, 1000);
                return false;
              }
            }
        });
    });

	/* Scroll Effect - can elements at different positions */
	$(window).on("scroll", function() {
        //Fixed Nav bar 
        if($(window).scrollTop() > 35) {
            $('header').css('background-color', '#2F3441');
        } else {
            $('header').css('background-color', 'transparent');
        }    
      //For each section or item you want faded in
       $('.fadeIn').each( function(i){
            
            var bottom_of_object = $(this).offset().top + $(this).outerHeight() - 125;
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            /* If the object is completely visible in the window, fade it it */
            if( bottom_of_window > bottom_of_object ){
                
                $(this).animate({'opacity':'1'},500);
                    
            }
            
        }); 

	});





//   $("body").mousemove(function(event) {
//   var eye = $(".eye");
//   var x = (eye.offset().left) + (eye.width() / 2);
//   var y = (eye.offset().top) + (eye.height() / 2);
//   var rad = Math.atan2(event.pageX - x, event.pageY - y);
//   var rot = (rad * (180 / Math.PI) * -1) + 180;
//   eye.css({
//     '-webkit-transform': 'rotate(' + rot + 'deg)',
//     '-moz-transform': 'rotate(' + rot + 'deg)',
//     '-ms-transform': 'rotate(' + rot + 'deg)',
//     'transform': 'rotate(' + rot + 'deg)'
//   });
// });



});

