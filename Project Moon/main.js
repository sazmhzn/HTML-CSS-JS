
const getElement = (selector) => {
  return document.querySelector("selector");
}
 
const formBox = getElement(".form-box");
const leftLine = getElement(".left-line");
const header = getElement("header");
const goBlack = getElement(".go-black");
const logo = getElement(".logo");
const tick = getElement(".tick-marks");
const checkBox = getElement("#check");
let lastScrollPosition;

const t1 = new TimelineMax();

t1.fromTo(
  formBox,
  1,
  { x: "100%" },
  { x: "0%", ease: Power2.easeInOut }
).fromTo(
  leftLine,
  1,
  { x: -60 },
  { x: 0, ease: Power2.easeInOut }, "-=1"
);
