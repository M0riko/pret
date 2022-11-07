$(document).ready(function(){
    $('.represent__corusel_inner').slick({
        dots: false,
        infinite: true,
        speed: 600,
        prevArrow: '<button type="button" class="slick-prev"><img src="../icons/left.png" ></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="../icons/right.png" ></button>',
    });

    $('ul.represents__tabs_click').on('click', 'li:not(.active)', function() {
      $(this)
        .addClass('active').siblings().removeClass('active')
        .closest('div.active').find('div.active').removeClass('active').eq($(this).index()).addClass('active');
    });
  });
