/* Burger-nav */
const
  btn = document.querySelector('.header__nav-burger-btn'),
  nav = document.querySelector('.header__nav')

btn.onclick = function () {
  nav.classList.toggle('header__nav_burger_active')
  btn.classList.toggle('header__nav-burger-btn_active')
  document.body.classList.toggle('no-overflow')
  // document.body.classList.
}

/* Flip-cards */
// const changeClass = (element, fromClass, toClass) => {
//   if (fromClass) element.classList.remove(fromClass)
//   if (toClass) element.classList.add(toClass)
// }

// Array.from(document.querySelectorAll('.card_transit')).forEach(card => {
//   changeClass(card, 'card_bg_blue', 'card_bg_white')
//   changeClass(document.querySelector, '', 'card_bg_white')
// })

// Truncating text
// const truncateText = () => {
  
// }