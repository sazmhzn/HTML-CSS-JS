const hex = [0, 1, 2, 3, 4, 5, 6, 7 ,8, 9, "A", "B", "C", "D", "E", "F"];
const color = document.querySelector('#hex-code');
const header = document.querySelector("header");

var button = document.getElementById("changeBtn");
button.addEventListener('click', changeFunction);

function changeFunction() {
  let hexColor = "#";
  for( let i = 0; i < 6; i++ ) {
    hexColor += hex[getRandomNumber()];
  }
  color.textContent = hexColor;
  document.getElementById("container").style.backgroundColor = hexColor;
  
  let headercolor = "#"
  for( let i = 0; i < 6; i++) {
    headercolor += hex[getRandomNumber()];
  }
  header.style.backgroundColor = headercolor;
  header.style.color = "white"
};

function getRandomNumber() {
  return Math.floor(Math.random() * hex.length);
}
