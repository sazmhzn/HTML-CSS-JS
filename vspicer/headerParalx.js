let ctr = new ScrollMagic.Controller();
let tl = new TimelineMax();

tl
.fromTo(
  '.first',
  1,
  {y: 0}, {y: -100}
)
.fromTo(
  '.second',
  1,
  {y: 0}, {y: -100}, '-=0.8'
)
.fromTo(
  '.third',
  1,
  {y: 0}, {y: -100}, '-=0.8'
)
.fromTo(
  '.forth',
  1,
  {y: 0}, {y: -100}, '-=0.8'
);

let scene = new ScrollMagic.Scene(  {
  triggerElement: '.about-description',
  duration: "100%",
  offset: 90,
  triggerHook: 0.1
})
.addIndicators()
.setTween(tl)
.addTo(controller)
