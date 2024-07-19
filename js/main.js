$(document).ready(function() {
  // Модальное окно для города
  var $cityModal = $("#cityModal");
  var $openCityModalButton = $("#openModalcity");
  var $cityCloseButton = $(".city-close-btn");

  $openCityModalButton.on("click", function() {
      $cityModal.css("display", "flex");
  });

  $cityCloseButton.on("click", function() {
      $cityModal.css("display", "none");
  });

  $(window).on("click", function(event) {
      if ($(event.target).is($cityModal)) {
          $cityModal.css("display", "none");
      }
  });

  // Модальное окно для карты
  var $mapModal = $("#mapModal");
  var $openMapModalButton = $(".delivery__pickup-map");
  var $mapCloseButton = $(".map-close-btn");

  $openMapModalButton.on("click", function() {
      $mapModal.css("display", "flex");
  });

  $mapCloseButton.on("click", function() {
      $mapModal.css("display", "none");
  });

  $(window).on("click", function(event) {
      if ($(event.target).is($mapModal)) {
          $mapModal.css("display", "none");
      }
  });
});

$(document).ready(function () {
  var $button = $('.payment__compound-itog-btn');
  var buttonOffsetTop = $button.offset().top;

  $(window).on('scroll', function () {
      if ($(window).scrollTop() + $(window).height() >= buttonOffsetTop) {
          $button.addClass('static');
      } else {
          $button.removeClass('static');
      }
  });
});

$(document).ready(function(){
  // Инициализация slick слайдера
  $('.bestsellers__inner').slick({
      slidesToShow: 7,
      slidesToScroll: 1,
      infinite: true,
      dots: false,
      arrows: true,
      draggable: true,
      swipeToSlide: true,
      touchThreshold: 30,
      responsive: [
        {
            breakpoint: 962,
            settings: {
                slidesToShow: 3,
                infinite: false,
            }
        },
        {
          breakpoint: 600,
          settings: {
              slidesToShow: 2,
              infinite: false,
          }
      },
    ]
  });

  $('.category-bestsellers__inner').slick({
    slidesToShow: "auto",
    slidesToScroll: 1,
    infinite: true,
    dots: false,
    arrows: true,
    draggable: true,
    swipeToSlide: true,
    touchThreshold: 30,
    responsive: [
      {
          breakpoint: 962,
          settings: {
              slidesToShow: 3,
              infinite: false,
          }
      },
      {
        breakpoint: 600,
        settings: {
            slidesToShow: 2,
            infinite: false,
        }
    },
  ]
});

});

$(document).ready(function() {
  function initializeSlick() {
      if ($(window).width() < 962) {
          if (!$('.product__page-img').hasClass('slick-initialized')) {
              $('.product__page-img').slick({
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  infinite: true,
                  dots: false,
                  arrows: true,
                  draggable: true,
                  swipeToSlide: true,
                  touchThreshold: 30,
              });
          }
      } else {
          if ($('.product__page-img').hasClass('slick-initialized')) {
              $('.product__page-img').slick('unslick');
          }
      }
  }

  initializeSlick();

  $(window).on('resize', function() {
      initializeSlick();
  });
});

document.addEventListener('DOMContentLoaded', function() {
  const items = document.querySelectorAll('.dop__item');

  items.forEach(function(item) {
      item.addEventListener('click', function() {
          item.classList.toggle('active');
      });
  });
});

document.addEventListener('DOMContentLoaded', function() {
  const sizeItems = document.querySelectorAll('.sizes__item');

  sizeItems.forEach(function(currentItem) {
      currentItem.addEventListener('click', function() {
          sizeItems.forEach(function(item) {
              item.classList.remove('active');
          });
          currentItem.classList.add('active');
      });
  });
});

document.addEventListener('DOMContentLoaded', function() {
  const colorItems = document.querySelectorAll('.colors__item');

  colorItems.forEach(function(currentColorItem) {
      currentColorItem.addEventListener('click', function() {
          colorItems.forEach(function(item) {
              item.classList.remove('active');
          });
          currentColorItem.classList.add('active');
      });
  });
});

$(document).ready(function() {
  $('.delivery__pickup').on('click', function() {
      $('.delivery__pickup').removeClass('active'); // Убираем класс active со всех элементов
      $(this).addClass('active'); // Добавляем класс active к текущему элементу
      $(this).find('input[type="radio"]').prop('checked', true); // Отмечаем радио внутри текущего элемента
  });
});

$(document).ready(function() {
  $('.payment__pickup').on('click', function() {
      $('.payment__pickup').removeClass('active'); // Убираем класс active со всех элементов
      $(this).addClass('active'); // Добавляем класс active к текущему элементу
      $(this).find('input[type="radio"]').prop('checked', true); // Отмечаем радио внутри текущего элемента
  });
});




function func() {
  // var windowWidth = $(window).width();
  // containerWidth = $('.container').width();
  // marginfree = (windowWidth - containerWidth) / 2 - 15;

  // if ($(window).width() > 1025) {
  //   $('.free .container').css({
  //     'margin-left': marginfree
  //   });
  // }

  if ($(window).width() <= 1500) {
  
    //$('.mob__menu-bottom').append($('.header__search'));
    // $('.mob__menu-bottom').append($('.header__nav'));
    // $('.mob__menu-bottom').append($('.header__user'));



  } 
  else {
    //$('.header__nav').insertBefore($('.header__actions'));
    $('.header__actions').prepend($('.header__user'));
    //$('.header__actions').prepend($('.header__search'));

  }

  if ($(window).width() < 1000) {
  

    $('.gamer__btn a').removeClass('btn--white');
    $('.office__btn a').removeClass('btn--white');
    $('.intro__article .intro__content ').removeClass('white');

    //$('.cart__drop-list').css('max-height', $(window).height()-280);
    $('.filter__list').css('max-height', $(window).height()-230);
  } 
  else {

    $('.gamer__btn').children('a').addClass('btn--white')
    $('.office__btn').children('a').addClass('btn--white');
    $('.intro__article .intro__content ').addClass('white');
  }

}

$(window).resize(func);

$(window).init(func)

function init_products_sliders() {
  //if ($(window).width() < 1200) {
  
    $('.catalog__item-gallery').slick({
      arrows: true,
      dots: true,
      fade: true,
      infinite: true,
      speed: 300,
      slidesToShow: 1,
      slidesToScroll: 1,
      prevArrow: '<button class="slick-arrow slick-prev"><svg><use href="#slider-prev"></use></svg></button>',
      nextArrow: '<button class="slick-arrow slick-next"><svg><use href="#slider-next"></use></svg></button>',
    });

  /* } else {

    $('.catalog__item-gallery').addClass('js-hover'); 
    $('.catalog__item-gallery .gallery__item:first-child').addClass('active');

  } */
}

$(function () {

  init_products_sliders();

  $('.social-float__button').click(function () {
    $(this).parent().toggleClass('active');
  
    return false;
  });
  

  $('.gallery__slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    infinite: true,
    prevArrow: '<button class="slick-arrow slick-prev"><svg><use href="#slider-prev"></use></svg></button>',
    nextArrow: '<button class="slick-arrow slick-next"><svg><use href="#slider-next"></use></svg></button>',
    asNavFor: '.gallery__nav'
  });
  $('.gallery__nav').slick({
    slidesToShow: 4,
    slidesToScroll: 4,
    asNavFor: '.gallery__slider',
    vertical: true,
    verticalSwiping: true,
    swipeToSlide: true,
    infinite: false,
    focusOnSelect: true,
    arrows: false,
    responsive: [{
        breakpoint: 1000,
        settings: {
          vertical: false,
          slidesToShow: 4,
          slidesToScroll: 4,
        }
      },
    ]
  });

})




$('.footer__top .tabs__links a').click(function(){
  if ($(this).parent().hasClass('active')) return;

  $(this).parent().addClass('active').siblings().removeClass('active');

  let city=$( $(this).attr('href') );
  $(city).show().siblings().hide();


  
  if ($(city).find('iframe').length==0)
  $(city).html('<iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A'+$(city).data('code')+'&source=constructor" width="100%" height="350" frameborder="0"></iframe>');

  return false;
});

var start_yandex_map=false;

$(function () {
  func();

  $(window).scroll(function () {
    var windowHeight = $(window).height();
    var positionScroll = $(window).scrollTop();

    if (positionScroll > 150) {
      $('header').addClass('fixed');
    } else {
      $('header').removeClass('fixed');
    }

    if ($('.footer__top').size() && positionScroll > $('.footer__top').offset().top - windowHeight && !start_yandex_map) {
      $('.footer__top .tabs__links li:first-child a').click();
      start_yandex_map=true;
    }

    if ($('body').hasClass('checkout-simplecheckout') && $(window).width()<768) {
      if ( positionScroll > $('.simplecheckout-button-block').offset().top - windowHeight + 60 )
      $('.simplecheckout-button-block').removeClass('fixed');
      else
      $('.simplecheckout-button-block').addClass('fixed');
    }


  });

  $('.open__search').click(function () {
    $('body').addClass('oh');
    $('.search__drop').addClass('open');
  });
  
  $('.close__search').click(function () {
    $('body').removeClass('oh');
    $('.search__drop').removeClass('open');
  });

  $('.mob__menu-open').click(function () {
    $(this).toggleClass('active');
    
    $('.mob__menu').toggleClass('open');
    
    if ($('.mob__menu').hasClass('open')) {
        $('.mob__menu-top').append($('.header__cart'));
        
        // Calculate and set max-height
        var menuHeight = $('.mob__menu').prop('scrollHeight');
        $('.mob__menu').css('max-height', menuHeight);
    } else {
        // Return element back to the original place when menu closes
        $('.header__original-location').append($('.header__cart'));
        
        // Remove max-height when menu is closed
        $('.mob__menu').css('max-height', '');
    }
    
    if ($('.header__menu-item.active').length == 0) {
        $('.header__menu-item:first-child').addClass('active');
    }
});



  $('.mob__menu-close').click(function () {
    $('body').removeClass('oh');
    $('.mob__menu').removeClass('open');
    $('.header__actions').append($('.header__cart'));
    //$('.drop__menu').removeClass('open')
  });


  $('.filter__open').click(function () {
    $('body').addClass('oh');
    $('.filter__drop').addClass('open');
    $('.shadow').addClass('open')
  });

  $('.open__cart').click(function () {
    $('body').addClass('oh');
    $('.cart__drop, .shadow').addClass('open');
    
    $('.header').addClass('with_shadow');
  });

  $('.close__filter, .shadow').click(function () {
    $('body').removeClass('oh');
    $('.filter__drop, .shadow').removeClass('open');

    $('.header').removeClass('with_shadow');
  });

  

  if ($(window).width() <= 1500) {
    $('.header__menu-link').click(function () {
      $(this).parent().addClass('active').siblings().removeClass('active');
      //$(this).parent().siblings().children('.drop__menu').removeClass('open');
      //$(this).parent().children('.drop__menu').addClass('open');
      return false;
    });

    $('.footer__nav-title').click(function () {
      $(this).toggleClass('active');
      $(this).siblings('.footer__nav-list').slideToggle();
    });
  
  } 

    $('.accordeon__title').click(function () {
      $(this).toggleClass('active');
      $(this).siblings('.accordeon__content').slideToggle();
    });

    $('.char__select').click(function () {
      $(this).next().slideToggle();
      return false;
    });

});



$(document).on('click','.quantity__input button',function(){
	  let input=$(this).parent().find('input');
   	let new_val=$(input).val();
   	if ($(this).hasClass('plus')) new_val++; else new_val--;
   	if (new_val<1) new_val=1;
   	$(input).val(new_val).trigger('change');
});

$(document).on('click','.close__cart, .shadow',function(){
    $('body').removeClass('oh');
    $('.cart__drop, .shadow').removeClass('open');
    $('.header').removeClass('with_shadow');
});


/*
function openCity(evt, cityName) {
  
  var i, tabcontent, tablinks;

 
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

 
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

      document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}
$('#defaultOpen').mouseover()
*/

// popup
;
(function () {
  window.myLib = {};

  window.myLib.body = document.querySelector('body');

  window.myLib.closestAttr = function (item, attr) {
    var node = item;

    while (node) {
      var attrValue = node.getAttribute(attr);
      if (attrValue) {
        return attrValue;
      }

      node = node.parentElement;
    }

    return null;
  };

  window.myLib.closestItemByClass = function (item, className) {
    var node = item;

    while (node) {
      if (node.classList.contains(className)) {
        return node;
      }

      node = node.parentElement;
    }

    return null;
  };

  window.myLib.toggleScroll = function () {
    myLib.body.classList.toggle('oh');
  };
})();

;
(function () {
  var showPopup = function (target) {
    target.classList.add('is-active');
  };

  var closePopup = function (target) {
    target.classList.remove('is-active');
  };

  myLib.body.addEventListener('click', function (e) {
    var target = e.target;
    var popupClass = myLib.closestAttr(target, 'data-popup');

    if (popupClass === null) {
      return;
    }

    e.preventDefault();
    var popup = document.querySelector('.' + popupClass);

    if (popup) {
      showPopup(popup);
      myLib.toggleScroll();
    }
  });

  myLib.body.addEventListener('click', function (e) {
    var target = e.target;

    if (target.classList.contains('popup__close') ||
      target.classList.contains('popup__inner')) {
      var popup = myLib.closestItemByClass(target, 'popup');

      closePopup(popup);
      myLib.toggleScroll();
    }
  });

  myLib.body.addEventListener('keydown', function (e) {
    if (e.keyCode !== 27) {
      return;
    }

    var popup = document.querySelector('.popup.is-active');

    if (popup) {
      closePopup(popup);
      myLib.toggleScroll();
    }
  });
})();

// popup