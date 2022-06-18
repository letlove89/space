const prevIco ='<img class="slider_arrow pre" src="assets/images/nav-left.png" width="30">';
const nextIco ='<img class="slider_arrow next" src="assets/images/nav-right.png" width="30">';

const prevIco2 ='<img class="block m-auto" src="assets/images/up.png" width="30">';
const nextIco2 ='<img class="block m-auto" src="assets/images/down.png" width="30">';

$('.banner_slide').slick({
  arrows:true,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  nextArrow: nextIco,
  prevArrow: prevIco,
  autoplay: true,
  autoplaySpeed: 2000,
  responsive: [
    {
      breakpoint: 567,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots:true,
        arrows:false,
      }
    },
  ]
})
$('.blog_slide').slick({
  arrows:true,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  nextArrow: nextIco,
  prevArrow: prevIco,
  autoplay: true,
  autoplaySpeed: 2000,
  responsive: [
    {
      breakpoint: 991.98,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots:true,
        arrows:false,
      }
    },
  ]
})

$('.slider-1').slick({
    arrows:false,
    dots: false,
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    // autoplay: true,
    // autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 991.98,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots:true,
        }
      },
    ]
})
$('.slider-2').slick({
    arrows:false,
    dots: false,
    infinite: false,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
})
$('.slider-2-aside').slick({
    arrows:false,
    dots: false,
    infinite: false,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 991.98,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots:true,
        }
      },
    ]
})
$('.slider-3-aside').slick({
    arrows:false,
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
})

$('.slider-3').slick({
    arrows:false,
    dots: false,
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,

  responsive: [
    {
      breakpoint: 460,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        dots:true,
      }
    },
    {
      breakpoint: 356,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        dots:true,
      }
    },
  ]
})

$('.slider-3-hass-dots').slick({
    arrows:false,
    dots: true,
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,

  responsive: [
    {
      breakpoint: 460,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        dots:true,
      }
    },
    {
      breakpoint: 356,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        dots:true,
      }
    },
  ]
})


$('.slider-4').slick({
    arrows:false,
    dots: false,
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 2,
    // autoplay: true,
    // autoplaySpeed: 2000,

  responsive: [
    {
      breakpoint: 1199.98,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      }
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 2,
        dots:true,
      }
    },
    {
      breakpoint: 680,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 2,
        dots:true,
      }
    },
    {
      breakpoint: 640,
      settings: {
        slidesToShow: 2.8,
        slidesToScroll: 1,
        dots:true,
      }
    },
    {
      breakpoint: 598,
      settings: {
        slidesToShow: 2.7,
        slidesToScroll: 1,
        dots:true,
        
      }
    },
    {
      breakpoint: 577,
      settings: {
        slidesToShow: 2.5,
        slidesToScroll: 1,
        dots:true,
        
      }
    },
    {
      breakpoint: 536,
      settings: {
        slidesToShow: 2.3,
        slidesToScroll: 1,
        dots:true,
        
      }
    },
    {
      breakpoint: 494,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        dots:true,
        
      }
    },
    {
      breakpoint: 432,
      settings: {
        slidesToShow: 1.7,
        slidesToScroll: 1,
        dots:true,
      }
    },
  ]
})

$('.slider-4b').slick({
    arrows:false,
    dots: false,
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 2000,

  responsive: [
    {
      breakpoint: 1920,
      settings: {
        slidesToShow:3,
        slidesToScroll: 2,
        dots:true,
      }
    },
    {
      breakpoint: 535,
      settings: {
        slidesToShow:2,
        slidesToScroll: 1,
        dots:true,
        
      }
    },
  ]
})

$('.slider-7').slick({
    arrows:false,
    dots: true,
    infinite: true,
    slidesToShow: 7,
    slidesToScroll: 3,
    nextArrow: nextIco,
    prevArrow: prevIco,
    // autoplay: true,
    // autoplaySpeed: 2000,

  responsive: [
    {
      breakpoint: 1199.98,
      settings: {
        slidesToShow:6,
        slidesToScroll: 3,
      }
    },
    {
      breakpoint:1024.98,
      settings: {
        slidesToShow:5,
        slidesToScroll: 3,
      }
    },
    {
      breakpoint:991.98,
      settings: {
        slidesToShow:6,
        slidesToScroll: 3,
      }
    },
    {
      breakpoint: 545.98,
      settings: {
        slidesToShow:5,
        slidesToScroll: 2,
      }
    },
    {
      breakpoint: 460.98,
      settings: {
        slidesToShow:4,
        slidesToScroll: 2,
      }
    },
    {
      breakpoint: 360.98,
      settings: {
        slidesToShow:3,
        slidesToScroll: 2,
      }
    },
  ]
})

$('.slider-8').slick({
    arrows:true,
    dots: false,
    // infinite: true,
    slidesToShow: 8,
    slidesToScroll: 3,
    nextArrow: nextIco,
    prevArrow: prevIco,
    autoplay: true,
    autoplaySpeed: 2000,

  responsive: [
    {
      breakpoint: 1199.98,
      settings: {
        slidesToShow:7,
        slidesToScroll: 3,
      }
    },
    {
      breakpoint:1024.98,
      settings: {
        slidesToShow:6,
        slidesToScroll: 3,
        arrows:false,
        dots: true,
      }
    },
    {
      breakpoint:991.98,
      settings: {
        slidesToShow:5,
        slidesToScroll: 3,
        arrows:false,
        dots: true,
      }
    },
    {
      breakpoint: 460.98,
      settings: {
        slidesToShow:4,
        slidesToScroll: 2,
        arrows:false,
        dots: true,
      }
    },
    {
      breakpoint: 360.98,
      settings: {
        slidesToShow:3,
        slidesToScroll: 2,
        arrows:false,
        dots: true,
      }
    },
  ]
})


$('.slider-4-blog').slick({
  arrows:false,
  dots: false,
  infinite: false,
  slidesToShow: 4,
  slidesToScroll: 2,
  autoplay: true,
  autoplaySpeed: 2000,

responsive: [
  {
    breakpoint: 1199.98,
    settings: {
      slidesToShow: 3,
      slidesToScroll: 3,
    }
  },
  {
    breakpoint: 992,
    settings: {
      slidesToShow: 3,
      slidesToScroll: 1,
      dots:true,
    }
  },

  {
    breakpoint: 460,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 1,
      dots:true,
    }
  },
  {
    breakpoint: 356,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 1,
      dots:true,
    }
  },
]
})


$('.slider-2-aside-hass-dots').slick({
  arrows:false,
  dots: true,
  infinite: false,
  slidesToShow: 2,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 991.98,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        dots:true,
      }
    },
  ]
})
$('.slider-vertical-aside').slick({
  arrows:true,
  nextArrow: nextIco2,
  prevArrow: prevIco2,
  dots: false,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  loop:true,
  // autoplay: true,
  // autoplaySpeed: 2000,
  vertical: true,
  verticalSwiping: true,
})