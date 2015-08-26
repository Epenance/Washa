/* jshint devel:true */
setMobileNav();

$(window).scroll(function(){
  var sticky = $('.navbar'),
    scroll = $(window).scrollTop();

  if (scroll >= 100) sticky.addClass('fixed');
  else sticky.removeClass('fixed');
});

function setMobileNav() {
  var menu = $("#desktop-menu").html();
  console.log(menu);
  $("#mobile-menu").html(menu);
}

$(".mobile-nav").click(function() {
  $("#mobile-menu").slideToggle("slow", function() {
    //Stuff for when animation is done
  });
});
