$(function(){
$('.rev_slider').slick({
  centerMode: true,
  centerPadding: '60px',
  slidesToShow: 4,
 
  autoplay:true,
  autoplaySpeed:500,

  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]
})
})