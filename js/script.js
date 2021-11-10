$("#click").click(function(){
    $("#manu").toggle();
  });
  

  $(document).ready(function() {
    // grab the initial top offset of the navigation 
       var stickyNavTop = $('#navber-part').offset().top;
       
       // our function that decides weather the navigation bar should have "fixed" css position or not.
       var stickyNav = function(){
        var scrollTop = $(window).scrollTop(); // our current vertical position from the top
             
        // if we've scrolled more than the navigation, change its position to fixed to stick to top,
        // otherwise change it back to relative
        if (scrollTop > stickyNavTop) { 
            $('#navber-part').addClass('sticky');
        } else {
            $('#navber-part').removeClass('sticky'); 
        }
    };
  
    stickyNav();
    // and run it again every time you scroll
    $(window).scroll(function() {
      stickyNav();
    });
  });



 
  $('.sevices-part').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
  });



  $('.testimoinal').slick({
    slidesToShow: 2,
    slidesToScroll: 3,
    arrows: true,
  });