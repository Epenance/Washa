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
});

//Accordion addons for faq styling


$('.panel-collapse').on('show.bs.collapse', function () {
  $(this).parent().addClass('accordion-active');
});

$('.panel-collapse').on('hide.bs.collapse', function () {
  $(this).parent().removeClass('accordion-active');
});
