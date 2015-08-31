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
  var ele = $(this).parent().addClass("accordion-active");
  console.log(ele);
})

$('.panel-collapse').on('hide.bs.collapse', function () {
  var ele = $(this).parent().removeClass("accordion-active");
  console.log(ele);
})
