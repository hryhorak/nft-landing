// Custom Scripts
// Custom scripts
// Мобильное меню бургер
function burgerMenu() {
   const burger = document.querySelector('.burger')
   const menu = document.querySelector('.menu')
   const body = document.querySelector('body')
   const Defbtn = document.querySelector('.def-btn')
   const Singin = document.querySelector('.sign-in')


   burger.addEventListener('click', () => {
      if (!menu.classList.contains('active')) {
         menu.classList.add('active')
         burger.classList.add('active-burger')
         body.classList.add('locked')
         Defbtn.classList.add('active')
         Singin.classList.add('active')

      } else {
         menu.classList.remove('active')
         burger.classList.remove('active-burger')
         body.classList.remove('locked')
         Defbtn.classList.remove('active')
         Singin.classList.remove('active')

      }
   })
   // Вот тут мы ставим брейкпоинт навбара
   window.addEventListener('resize', () => {
      if (window.innerWidth > 991.98) {
         menu.classList.remove('active')
         burger.classList.remove('active-burger')
         body.classList.remove('locked')
         Defbtn.classList.remove('active')
         Singin.classList.remove('active')

      }
   })
}
burgerMenu();



$('.auctions__card').slick({
   slidesToShow: 4,
   slidesToScroll: 1,
   autoplay: true,
   autoplaySpeed: 5000,
   arrows: false,
   responsive: [
      {
         breakpoint: 1155,
         settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            autoplay: true
         }
      },
      {
         breakpoint: 575,
         settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true
         }
      }
   ]
});
;


