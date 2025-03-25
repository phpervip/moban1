$(function(){

  	/*==== Mobile Menu  ====*/
    $('.mobile-menu nav').meanmenu({
      meanScreenWidth: "991",
      meanMenuContainer: ".mobile-menu",
      onePage: true,
    });
    
    /*==== Top quearys menu  ====*/
    var emsmenu = $(".em-quearys-menu i.t-quearys");
    var emscmenu = $(".em-quearys-menu i.t-close");
    var emsinner = $(".em-quearys-inner");
    emsmenu.on('click', function() {
      emsinner.addClass('em-s-open');
      $(this).addClass('em-s-hiddens');
      emscmenu.removeClass('em-s-hidden');
    });
    emscmenu.on('click', function() {
      emsinner.removeClass('em-s-open');
      $(this).addClass('em-s-hidden');
      emsmenu.removeClass('em-s-hidden');
    });
  
    /==== popup mobile menu  ====/
    
    var mrightma = $(".mobile_menu_o i.openclass");
    var mrightmi = $(".mobile_menu_o i.closeclass");
    var mrightmir = $(".mobile_menu_inner");
    var mobile_ov = $(".mobile_overlay");
    var mobile_onep = $(".mobile-menu .mean-nav ul.nav_scroll li");
    mrightma.on('click', function() {
      mrightmir.addClass('tx-s-open');
      mobile_ov.addClass('mactive');
    });
    mrightmi.on('click', function() {
      mrightmir.removeClass('tx-s-open');
      mobile_ov.removeClass('mactive');
    });
    mobile_onep.on('click', function() {
      mrightmir.removeClass('tx-s-open');
      mobile_ov.removeClass('mactive');
    });
    
    /*=============== sticky menu ================= */
    var header = $('.main_menu_area');
    $(window).on('scroll',function(){
        if($(window).scrollTop()>50){
            $('.main_menu_area').addClass('sticky');
        }
        else{
            header.removeClass('sticky');
        }
    });

    /*============= main nav icons popup  ===========*/
    $('.main_nav_icons i').click(function(){
      $('.nav_icon_popup').addClass('icon_popup');
    });
    $('.inner_nav_icon_popup i').click(function(){
      $('.nav_icon_popup').removeClass('icon_popup');
    });

    /*============= main nav icons popup  ===========*/
    $('.main_nav_icons i').click(function(){
      $('.nav_icon_popup').addClass('icon_popup');
    });
    $('.inner_nav_icon_popup i').click(function(){
      $('.nav_icon_popup').removeClass('icon_popup');
    });

    $('.main_nav_icon_right i').click(function(){
      $('.main_nav_icon_right_popup').addClass('site_popup');
    });

    $('.m_nav_rpi_close i').click(function(){
      $('.main_nav_icon_right_popup').removeClass('site_popup');
    });

    
	/* hamburger menu */
  $('.hamburger').on('click', function() {
    $(this).toggleClass('is-active');
    $(this).next().toggleClass('nav-show')
});	


  /* ==== wow js ==== */
  new WOW().init();

    /*========== slider active js =============*/
    $('.slider_active').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 3000,
        arrows: true,
        responsive: [
          {
            breakpoint: 1200,
            settings: {
              arrows: true,
            }
          },
          {
            breakpoint: 992,
            settings: {
              arrows: false,
            }
          },
          {
            breakpoint: 767,
            settings: {
              arrows: false,
            }
          },
        ]
      });

      /*========== slider active js =============*/
    $('.slider2_active').slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      speed: 3000,
      arrows: true,
      fade: true,
      cssEase: 'linear',
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            arrows: false,
          }
        },
        {
          breakpoint: 992,
          settings: {
            arrows: false,
          }
        },
        {
          breakpoint: 767,
          settings: {
            arrows: false,
          }
        },
      ]
    });

    /*========== slider 3 active js =============*/
    $('.slider3_active').slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 4000,
      speed: 2000,
      arrows: false,
      dots: true,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
          }
        },
        {
          breakpoint: 992,
          settings: {
            dots: false,
          }
        },
        {
          breakpoint: 767,
          settings: {
            dots: false,
          }
        },
      ]
    });

    /*================ service active js =============*/
    $('.service_active').slick({
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      speed: 1300,
      arrows: true,
      dots: true,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 3,
            arrows: false,
          }
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 2,
            arrows: false,
          }
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 1,
            arrows: false,
          }
        },
      ]
    });

    /*================ service 2 active js =============*/
    $('.service_active2').slick({
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 1500,
      speed: 1000,
      arrows: true,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 3,
            arrows: false,
          }
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 2,
            arrows: false,
          }
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 1,
            arrows: false,
          }
        },
      ]
    });

    /*================ shop active js =============*/
    $('.shop_active').slick({
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 1500,
      speed: 1000,
      arrows: true,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 3,
            arrows: false,
          }
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 2,
            arrows: false,
          }
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 1,
            arrows: false,
          }
        },
      ]
    });

    /*================ product active js =============*/
    $('.product_active').slick({
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 1500,
      speed: 1000,
      arrows: true,
      centerMode: true,
      centerPadding: '10px',
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 3,
            arrows: false,
          }
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 3,
            arrows: false,
          }
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 1,
            arrows: false,
          }
        },
      ]
    });


    /*=========== food active js =========*/
    $('.food_active').slick({
      infinite: true,
      slidesToShow: 6,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 1500,
      speed: 1000,
      arrows: true,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 3,
            arrows: false,
          }
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 2,
            arrows: false,
          }
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 1,
            arrows: false,
          }
        },
      ]
    });

      /*======== testimonial  active js ======*/
      $('.test_active').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2500,
        speed: 1700,
        arrows: true,
        dots: false,
        responsive: [
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 2,
              arrows: false,
            }
          },
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 2,
              arrows: false,
            }
          },
          {
            breakpoint: 767,
            settings: {
              slidesToShow: 1,
              arrows: false,
            }
          },
        ]
      });
      

       /*======== testimonial 2 active js ======*/
       $('.h2_test_active').slick({
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        speed: 1300,
        arrows: true,
        dots: false,
        responsive: [
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 2,
              arrows: false,
            }
          },
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 2,
              arrows: false,
            }
          },
          {
            breakpoint: 767,
            settings: {
              slidesToShow: 1,
              arrows: false,
            }
          },
        ]
      });

      /*======== testimonial 3 active js ======*/
      $('.h3_test_active').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        speed: 2100,
        arrows: true,
        dots: false,
        responsive: [
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 1,
              arrows: false,
            }
          },
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 1,
              arrows: false,
            }
          },
          {
            breakpoint: 767,
            settings: {
              slidesToShow: 1,
              arrows: false,
            }
          },
        ]
      });

      /*======== testimonial 4 active js ======*/
      $('.h4_test_active').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        speed: 2200,
        arrows: false,
        dots: true,
        responsive: [
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 1,
              arrows: false,
            }
          },
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 1,
              arrows: false,
              dots: false,
            }
          },
          {
            breakpoint: 767,
            settings: {
              slidesToShow: 1,
              arrows: false,
              dots: false,
            }
          },
        ]
      });

      /*======== testimonial 5 active js ======*/
      $('.h5_test_active').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        speed: 2000,
        arrows: true,
        dots: false,
        centerPadding: '10px',
        centerMode: true,
        responsive: [
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 1,
              arrows: false,
            }
          },
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 1,
              arrows: false,
            }
          },
          {
            breakpoint: 767,
            settings: {
              slidesToShow: 1,
              arrows: false,
            }
          },
        ]
      });

      
      /*======== testimonial 6  js ======*/
      $('.h6_test_active').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2500,
        speed: 1700,
        arrows: false,
        dots: true,
        responsive: [
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 2,
              arrows: false,
            }
          },
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 2,
              arrows: false,
            }
          },
          {
            breakpoint: 767,
            settings: {
              slidesToShow: 1,
              arrows: false,
            }
          },
        ]
      });

      /*========= client slider  ========= */
      $('.slider_active_top').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplaySpeed: 3000,
        speed: 1000,
        autoplay: true,
        arrows: false,
        fade: false,
        asNavFor: '.slider_active_bottom_id2'
      });
      $('.slider_active_bottom_id2').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplaySpeed: 3000,
        speed: 1000,
        autoplay: true,
        asNavFor: '.slider_active_top',
        dots: false,
        vertical: true,
        verticalSwiping: true,					  
        centerMode: false,
        focusOnSelect: true
      });

      /*======== project active js ======*/
     $('.project_active').slick({
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      speed: 1000,
      arrows: true,
      dots: false,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 3,
            arrows: false,
          }
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 2,
            arrows: false,
          }
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 1,
            arrows: false,
          }
        },
      ]
    });


     /*======== project active js ======*/
     $('.h2_project_active').slick({
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 1520,
      speed: 2000,
      arrows: false,
      dots: false,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 3,
            arrows: false,
          }
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 2,
            arrows: false,
          }
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 1,
            arrows: false,
          }
        },
      ]
    });

    /*======== project 3 active js ======*/
    $('.h3_project_active').slick({
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      speed: 1000,
      arrows: false,
      dots: true,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 3,
            arrows: false,
          }
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 2,
            arrows: false,
            dots: false,
          }
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 1,
            arrows: false,
            dots: false,
          }
        },
      ]
    });

    /*======== project active js ======*/
    $('.team_active').slick({
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      speed: 1000,
      arrows: true,
      dots: false,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 3,
            arrows: false,
          }
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 2,
            arrows: false,
          }
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 1,
            arrows: false,
          }
        },
      ]
    });

    /*======== blog active js ======*/
    $('.blog_active').slick({
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      speed: 1000,
      arrows: true,
      dots: false,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 3,
            arrows: false,
          }
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 2,
            arrows: false,
          }
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 1,
            arrows: false,
          }
        },
      ]
    });

    /*======== blog 2 active js ======*/
    $('.blog2_active').slick({
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      speed: 1000,
      arrows: true,
      dots: false,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 3,
            arrows: false,
          }
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 2,
            arrows: false,
          }
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 1,
            arrows: false,
          }
        },
      ]
    });

    /*======== blog 3 active js ======*/
    $('.blog3_active').slick({
      infinite: true,
      slidesToShow: 2,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      speed: 1000,
      arrows: true,
      dots: false,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 2,
            arrows: false,
          }
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 2,
            arrows: false,
          }
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 1,
            arrows: false,
          }
        },
      ]
    });

    
     /*======== brand active js ======*/
     $('.brand_active').slick({
      infinite: true,
      slidesToShow: 5,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      speed: 1000,
      arrows: true,
      dots: false,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 4,
            arrows: false,
          }
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 3,
            arrows: false,
          }
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 2,
            arrows: false,
          }
        },
      ]
    });

     /*============== counter js ============== */
     $('.counter').counterUp({
        delay: 40,
        time: 4000
    });

      /* ========== veno box js ========= */
      new VenoBox({
        selector: '.my-image-links',
        spinner: 'rotating-plane'
      });

      new VenoBox({
        selector: '.my-video-links',
      });

      /*========= countdown js ==========*/
    $('[data-countdown]').each(function() {
      var $this = $(this), finalDate = $(this).data('countdown');
      $this.countdown(finalDate, function(event) {
        $this.html(event.strftime('<div class="tx_single_countdown"><span class="witr_digit">%-D</span> <p>Days</p></div><div class="tx_single_countdown"><span class="witr_digit">%-H</span> <p>Hours</p></div> <div class="tx_single_countdown"><span class="witr_digit">%M</span> <p>Minutes</p></div> <div class="tx_single_countdown"><span class="witr_digit">%S</span> <p>Seconds</p></div>'));
      });
    });

       /*==== scrollUp  ====*/
			$.scrollUp({
				scrollText: '<i class="icofont-thin-up"></i>',
				easingType: 'linear',
				scrollSpeed: 900,
				animation: 'fade'
			});

      /*========= direction hover ===========*/
      $(".snake").snakeify({
        speed: 400
      });

      /*========= dn slider js ===========*/
      $('.witr_load').imagesLoaded(function() {
        $(".dna_mainid88").dnSlide({
        "response" : true ,
        afterClickBtnFn :function(i){ console.log(i); },								    
          infinite: true,
          autoPlay: true,
          height: 1000,
          autoplaySpeed: 4000,
          speed: 500,
          precentWidth: "80%",
          scale: .8,

        });
      });

      
    /*======== circle progess bar active js ======*/
    var witr_cp = $('.witr_cir1');

    witr_cp.circleProgress({
    startAngle: -Math.PI / 4 * 3,
    value: .92,
    size: 200,
    lineCap: 'round',
    fill: {  gradient: ["#163445", "#163445"]}
    });

    var witr_cp = $('.witr_cir2');

    witr_cp.circleProgress({
    startAngle: -Math.PI / 4 * 3,
    value: .75,
    size: 200,
    lineCap: 'round',
    fill: {  gradient: ["#163445", "#163445"]}
    });

    var witr_cp = $('.witr_cir3');

    witr_cp.circleProgress({
    startAngle: -Math.PI / 4 * 3,
    value: .87,
    size: 200,
    lineCap: 'round',
    fill: {  gradient: ["#163445", "#163445"]}
    });

    var witr_cp = $('.witr_cir4');

    witr_cp.circleProgress({
    startAngle: -Math.PI / 4 * 3,
    value: .78,
    size: 200,
    lineCap: 'round',
    fill: {  gradient: ["#163445", "#163445"]}
    });

    /* img 3d hover */
    $(".img_rotate").hover3d({
      selector: ".img_hover",
      shine: false,
    });

    /*========= isotope active ==========*/
    /* portfolio active */	
    function twrportfolio(){
      var portfolio = $(".grid");
      if( portfolio.length ){
          portfolio.imagesLoaded( function() {
              portfolio.isotope({
                  itemSelector: ".pitem",
                  layoutMode: 'masonry',
                  filter:"*",
                  animationOptions :{
                      duration:1000
                  },
                  hiddenStyle: {
                      opacity: 0,
                      transform: 'scale(.4)rotate(60deg)',
                  },
                  visibleStyle: {
                      opacity: 1,
                      transform: 'scale(1)rotate(0deg)',
                  },
                  stagger: 0,
                  transitionDuration: '0.9s',
                  masonry: {}
              });
              $(".portfolio_nav ul li").on('click',function(){
                  $(".portfolio_nav ul li").removeClass("current_menu_item");
                  $(this).addClass("current_menu_item");

                  var selector = $(this).attr("data-filter");
                  portfolio.isotope({
                      filter: selector,
                      animationOptions: {
                          animationDuration: 750,
                          easing: 'linear',
                          queue: false
                      }
                  });
                  return false;
              });

          });
      }
    }
    twrportfolio();

  });