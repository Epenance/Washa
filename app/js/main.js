/* jshint devel:false */

function setMobileNav() {
  var menu = $('#desktop-menu').html();
  $('#mobile-menu').html(menu);
}

$('.mobile-nav').click(function() {
  $('#mobile-menu').slideToggle('slow', function() {
    //Stuff for when animation is done
  });
});



//Accordion addons for faq styling
$('.panel-collapse').on('show.bs.collapse', function () {
  $(this).parent().addClass('accordion-active');
});

$('.panel-collapse').on('hide.bs.collapse', function () {
  $(this).parent().removeClass('accordion-active');
});



$(function() {
  setMobileNav();

  $('#mobile-menu li a').click(function() {
    $('#mobile-menu').slideToggle('slow', function() {
      //Stuff for when animation is done
    });
  });

  //Add more selectors here if needed for the smoothscroll
  $('.navbar a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') === this.pathname.replace(/^\//,'') && location.hostname === this.hostname) {
      var target2 = $(this.hash);
      target2 = target2.length ? target2 : $('[name=' + this.hash.slice(1) +']');
      if (target2.length) {
        $('html,body').animate({
          scrollTop: target2.offset().top - 60 //Adjust this number to fit the header height
        }, 1000);
        return false;
      }
    }
  });
});
