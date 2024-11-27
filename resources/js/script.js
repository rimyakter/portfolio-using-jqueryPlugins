
//Hamburger Menu
function openMenu(){
    document.getElementById("close-menu").style.width = "100%";
}
function closeMenu(){
    document.getElementById("close-menu").style.width = "0%";
}

//MixitUp
var mixer = mixitup('.grid-portfolio-container');

//scrollyfy
$(function() {
  $.scrollify({
    section : ".scrollify",
    setHeights: false,
    updateHash: false,
  });
});

//Smooth scroll
$(function(){
  $('.overlay-content li a, .to-top a, .down-icon a').on('click', function(){
    $('html, body').animate({
          scrollTop: $($.attr(this, 'href')).offset().top
    }, 1000);
    return false;
  });
});
