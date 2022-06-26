const burgerOpen = document.querySelector('.burger-open');
const burgerClose = document.querySelector('.burger-close');
const navMenu = document.querySelector('.nav__meny');
const burgerOverlay = document. querySelector('.burger-overlay');
const navLinkArray = Array.from(document.getElementsByClassName('nav__link'))

navLinkArray.forEach(element => {
  element.addEventListener('click' , function(){
    hideOpenedBurger()
  })
});

burgerOpen.addEventListener('click', function(){
  burgerOpen.classList.add('hide');
  burgerClose.classList.remove('hide');
  navMenu.classList.toggle('hide-menu');
  burgerOverlay.classList.remove('hide-overlay');
  
})

burgerClose.addEventListener('click', function(){
  burgerClose.classList.add('hide');
  burgerOpen.classList.remove('hide');
  navMenu.classList.toggle('hide-menu');
  burgerOverlay.classList.add('hide-overlay');
})

burgerOverlay.addEventListener('click', function(){
  const isHideMenuactive = navMenu.classList.contains('hide-menu')
  if ( !isHideMenuactive ) {
    hideOpenedBurger()
  }
})

function hideOpenedBurger() {
  navMenu.classList.toggle('hide-menu');
  burgerOpen.classList.remove('hide');
  burgerClose.classList.add('hide');
  burgerOverlay.classList.add('hide-overlay');
}

