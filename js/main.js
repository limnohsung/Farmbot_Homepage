$(function(){

  var w = $(window).width();
  $(window).resize(function(){
    w = $(window).width();
  });
  if(w <= 480){
    var swiper = new Swiper('.swiper-container', {
      spaceBetween: 30,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });
    $('.location dl dd img').attr('src','img/e-mail_m.png');


  }else{
    $('.swiper-slide').css({width: 'auto'});

    // pagenation 수정 ================================
      $(document).on('mouseover', '.fp-right', function(){
          TweenMax.to(".flash", 1, {
              opacity: 0
          });

          TweenLite.to(".circle", 0.5, {
              right: -60,'border-radius': '50%'
          });
          TweenLite.to("#fp-nav li:nth-child(1)", 0.5, {
              right: 22
          });
          TweenLite.to("#fp-nav li:nth-child(2)", 0.5, {
              right: 65, top: '-5px'
          });
          TweenLite.to("#fp-nav li:nth-child(3)", 0.5, {
              right: 80
          });
          TweenLite.to("#fp-nav li:nth-child(4)", 0.5, {
              right: 65, top: '5px'
          });
          TweenLite.to("#fp-nav li:nth-child(5)", 0.5, {
              right: 22
          });

      })



      $(document).on('mouseleave', '.fp-right', function(){
        // TweenLite.to(".flash", 0.5, {
        //     opacity: 0.6
        // });
          TweenLite.to(".circle", 0.5, {
              right: -120,'border-radius': '50%'
          });
          TweenLite.to("#fp-nav li:nth-child(1)", 0.5, {
              right: 0
          });
          TweenLite.to("#fp-nav li:nth-child(2)", 0.5, {
              right: 0, top: 0
          });
          TweenLite.to("#fp-nav li:nth-child(3)", 0.5, {
              right: 0
          });
          TweenLite.to("#fp-nav li:nth-child(4)", 0.5, {
              right: 0, top: 0
          });
          TweenLite.to("#fp-nav li:nth-child(5)", 0.5, {
              right: 0
          });
      })

      TweenMax.to(".flash", 1.5, {
          opacity: 0, repeat: -1, yoyo: true
      });

  }

  $(document).on('mouseover', '#fp-nav li', function(){
    $(this).find('.fp-sr-only').css({color:'#fff'});
  });
  $(document).on('mouseleave', '#fp-nav li', function(){
    $('.fp-sr-only').css({color:'transparent'});
  });

  // logo 클릭시 최상단 이동 ==================
  $('.logo').click(function(){
    location.href = '#1'
  })

  // 지도 깜빡임 ==============================

  var p = 1000;
  setInterval(function(){
    $('.map .map_pin li').eq(0).css({opacity: 0.4});
    $('.map .map_pin li').eq(0).animate({width : '100px', height: '100px'}, p, function(){
      $('.map .map_pin li').eq(0).animate({opacity: 0}, function(){
        $('.map .map_pin li').eq(0).css({width : '0', height: '0'});
      });
    });
  }, p*2);

  setTimeout(function(){
    setInterval(function(){
      $('.map .map_pin li').eq(1).css({opacity: 0.1});
      $('.map .map_pin li').eq(1).animate({width : '100px', height: '100px'}, p, function(){
        $('.map .map_pin li').eq(1).animate({opacity: 0}, function(){
          $('.map .map_pin li').eq(1).css({width : '0', height: '0'});
        });
      });
    }, p*2);
  }, 200);







// fullpage 설정 ================================
var myFullpage = new fullpage('#fullpage', {
        anchors: ['FARMBOT', '비전', '사업소개', '조직도','오시는길'],
        navigation: true,
        navigationPosition: 'right',
        afterRender: function(){

          $('.fp-right').append('<div class="circle"></div>');

        },
        afterResponsive: function(){
        },
        afterLoad: function( section, origin, destination, direction){
			var loadedSlide = this;

			if(origin.anchor == 'FARMBOT'){
        $('.main .content h3').animate({'bottom': 0, 'opacity': 1}, 500);
        $('.main .content p').animate({'bottom': 0, 'opacity': 1}, 1000);
			};

			if(origin.anchor == '비전'){
        $('.vision .content h3').animate({'bottom': 0, 'opacity': 1}, 500);
        $('.vision .content p').animate({'bottom': 0, 'opacity': 1}, 1000);
				};

      if(origin.anchor == '사업소개'){
        $('.intro_biz .content h3').animate({'bottom': 0, 'opacity': 1}, 500);
        $('.intro_biz .content ul li:nth-child(1)').animate({'bottom': 0, 'opacity': 1}, 800);
        $('.intro_biz .content ul li:nth-child(2)').animate({'bottom': 0, 'opacity': 1}, 1000);
        $('.intro_biz .content ul li:nth-child(3)').animate({'bottom': 0, 'opacity': 1}, 1200);
				};

			if(origin.anchor == '조직도'){
        $('.org .content h3').animate({'bottom': 0, 'opacity': 1}, 500);
        $('.org .content ul').animate({'bottom': 0, 'opacity': 1}, 1000);
			};

      if(origin.anchor == '오시는길'){
        $('.location .content h3').animate({'bottom': 0, 'opacity': 1}, 500);
        $('.location .content .location_box').animate({'bottom': 0, 'opacity': 1}, 1000);

        $('.circle').css('border-color','#555');
        $('#fp-nav ul li a span, .fp-slidesNav ul li a span').css('background-color','#555');
        $('.logo img').attr('src','img/b_logo.png');
        $('.flash').css('background-color','#11091e');
			}else{
        $('.circle').css('border-color','#eef6e1');
        $('#fp-nav ul li a span, .fp-slidesNav ul li a span').css('background-color','#eef6e1');
        $('.logo img').attr('src','img/w_logo.png');
        $('.flash').css('background-color','#eef6e1');
      }
		}
    });


  });
