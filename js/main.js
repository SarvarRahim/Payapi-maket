var elOpenNav = document.querySelector('.sitenav');
var elOpenToggle = document.querySelector('.js-site-header__nav');

elOpenToggle.addEventListener('click', function (){
  elOpenNav.classList.toggle('sitenav--acitve')
});
