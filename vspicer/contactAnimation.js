
let contact = document.querySelector('.contact')
let firstLine = document.querySelector('.first-line')
let secondtLine = document.querySelector('.second-line')
let thirdtLine = document.querySelector('.third-line')
let contactLink = document.querySelector('#contact-link')
let showOpacity = document.querySelector('.show-opacity')
//END VARIABLES

contactLink.addEventListener('click', (e) => {
  e.preventDefault();
  contact.style.pointerEvents = 'initial'
  //contact.style.opacity = 1

  const tl = new TimelineMax();

  tl.fromTo(
    contact,
    1,
    {opacity: 0},
    {opacity: 1},
    "-=0"
  ).fromTo(
    firstLine, 
    1,
    {y: -20}, 
    {y: 0}, 
    {opacity: 0},
    {opacity: 1},
    "-=0"
  ).fromTo(
    secondtLine, 
    1,
    {y: -20}, 
    {y: 0},
    {opacity: 0},
    {opacity: 1},
    "-=0"
  ).fromTo(
    thirdtLine, 
    1,
    {y: -20}, 
    {y: 0},
    {opacity: 0},
    {opacity: 1},
    "-=0"
  )
})

contact.addEventListener('click', (e) => {
  e.preventDefault();
  contact.classList.remove('showOpacity');
  contact.style.opacity = '0'
  contact.style.pointerEvents = 'none'
})