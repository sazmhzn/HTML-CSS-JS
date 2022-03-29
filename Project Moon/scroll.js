const vision = document.querySelector(".dropdown-content > #vision");
const people = document.querySelector(".dropdown-content > #people");
let currentUrl = window.location.href.toString().split(window.location.host)[1];
//410

console.log(document.baseURI);


vision.addEventListener('click', (e) => {
  e.preventDefault();

  if( currentUrl === "/about.html" ) {
    window.scrollTo(0, 660);
  } else {
    window.location.href = "about.html";
    scrolling();
  }

})

people.addEventListener('click', (e) => {
  e.preventDefault();
  window.scrollTo(0, 1760);

})

function scrolling() {

  window.scrollTo(0, 410);

}
