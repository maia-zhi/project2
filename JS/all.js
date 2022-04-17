$(document).ready(function(event){
    var mySwiper = new Swiper ('.swiper', {
        direction: 'horizontal',
        loop: true,
        autoplay: {
            delay: 3000,
          },
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            dynamicMainBullets: '3',
            clickable: true,
          }
    });




    $('.menu li').hover(function(){
        $(this).find('.slideMenus').toggleClass('line');
        $(this).siblings().find('slideMenus').removeClass('line');
        $(this).find('ul').toggleClass('open').parent().siblings().find('ul').removeClass('open');

        
    });
    $('.slideMenu').hover(function(){
        $(this).siblings().addClass('line');
    });
    $('.slideMenu li').hover(function(){
        $(this).addClass('hover');
    });
    $('.scrTop').click(function(event){
        event.preventDefault();
        $('html, body').animate({scrollTop: 0}, 700);
    });



});