$(document).ready(() => {
  $('.releases-carousel').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    centerMode: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }]
    })
    
    $('.hero-carousel').slick({
      infinite: true,
      slidesToShow: 1,
      dots: true,
      autoplay: true,
      autoplaySpeed: 2000
    })
  }
)