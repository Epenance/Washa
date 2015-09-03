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

$(function() {
  setMobileNav();

  $('#mobile-menu li a').click(function() {
    console.log("Hello?");
    $('#mobile-menu').slideToggle('slow', function() {
      //Stuff for when animation is done
    });
  });
});

//Accordion addons for faq styling
$('.panel-collapse').on('show.bs.collapse', function () {
  $(this).parent().addClass('accordion-active');
});

$('.panel-collapse').on('hide.bs.collapse', function () {
  $(this).parent().removeClass('accordion-active');
});


//Smooth scroll for menu links
$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top - 60 //Adjust this number to fit the header height
        }, 1000);
        return false;
      }
    }
  });
});
