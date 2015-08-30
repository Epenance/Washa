/* jshint devel:false */

function setMobileNav() {
  var menu = $('#desktop-menu').html();
  console.log(menu);
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
