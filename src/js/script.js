new WOW().init();

$('.mobile-menu').on('click', function () {
    $('.hamburger-menu').toggleClass('animate');
    $(".navigation .menu").slideToggle(400);
    setTimeout(function() { $(".logo").toggleClass('opacity'); }, 270);
})

$(window).resize(function () {
    const windowWidth = $(window).width();

    if (windowWidth > 960) {
        $('.navigation .menu').css({
            display: 'flex'
        })
    } else {
        $('.navigation .menu').css({
            display: 'none'
        })
    }
});

//Scroll to anchor

$("a.scroll_link").click(function (event) {
  event.preventDefault();
  $("html, body").animate({
      scrollTop: $($(this).attr("href")).offset().top
  }, 500);
});



//Slick slider 

$('.slider').slick({
    
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 2,
    slidesToScroll: 2,
    // autoplay: true,
    responsive: [
      {
        breakpoint: 1221,
        settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
        arrows: false
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
          arrows: false
        
        }
      },
      {
        breakpoint: 640,
        settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: false
        }
      },
      {
        breakpoint: 480,
        settings: {
        centerMode: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: false
         
        }
      }

    ]
  });

