/* Мобильное меню */
var burger = $('.header__burger');
var nav = $('.header__navigation');
burger.on('click', function () {
  nav.toggleClass('header__navigation--visible');
  burger.toggleClass('header__burger--close');
  console.log('Работаю');
});

/* Переключение вкладок */
function openCity(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName('hero__tabcontent');
  for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = 'none';
  }
  tablinks = document.getElementsByClassName('hero__tablinks');
  for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(' active', '');
  }
  document.getElementById(cityName).style.display = 'flex';
  evt.currentTarget.className += ' active';
}