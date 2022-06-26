$(document).ready(function(){
    $('.center').slick( {
        arrows:true,/*-отобржать стрелки (по умолчанию), скрыть-fals*/
        dots:true, /*-отбражать точки*/
        // adaptiveHeight:true, /*-адаптивная высота слайдера*/
        slidesToShow: 3, /*--количество отображаемых слайдов*/
        slidesToScroll: 1, /*--кол-во слайдов при прокрутке (по умолчанию = 1*/
        centerMode: true, /*--основной слайд по центру */
        centerPadding: ' 0px',
        // variableWidth: true
        // autoplay: true,
        // autoplaySpped: 2000,
        responsive: [
                {
                    breakpoint: 992,
                    settings: {
                    arrows: false,
                    // centerMode: true,
                    // centerPadding: '40px',
                    slidesToShow: 1
                    }
                },
                  {
                    breakpoint: 768,
                    settings: {
                    arrows: false,
                    // centerMode: true,
                    // centerPadding: '40px',
                    slidesToShow: 1
                    }
                  },
                  {
                    breakpoint: 480,
                    settings: {
                    arrows: false,
                    // centerMode: true,
                    // centerPadding: '40px',
                    slidesToShow: 1
                    }
                  }
                ]
    });
  });