
let controller = new ScrollMagic.Controller();
let timeline = new TimelineMax();

timeline
.fromTo(
  '.story', 2,{y: 0} ,{y: -10},
)
.fromTo(
  '.set', 2,{y: 0}, {y: -200}, {x: 0}, {x: 100}, '-=2'
);

let scene = new ScrollMagic.Scene(  {
  triggerElement: '.about-image-section',
  duration: "100%",
  offset: 90,
  triggerHook: 0.1
})
.setTween(timeline)
.addTo(controller)

let ctr = new ScrollMagic.Controller();
let tl = new TimelineMax();

tl
.fromTo(
  '.first',
  0.1,
  {y: 0}, {y: -400}
)
.fromTo(
  '.second',
  0.3,
  {y: 0}, {y: -300}
)
.fromTo(
  '.third',
  0.6,
  {y: 0}, {y: -200}
)
.fromTo(
  '.forth',
  0.9,
  {y: 0}, {y: -100}
);

let scene1 = new ScrollMagic.Scene(  {
  triggerElement: 'section',
  duration: "10%",
  offset: 30,
  triggerHook: 0
})
.setTween(tl)
.addTo(ctr)

let control = new ScrollMagic.Controller();
let ti = new TimelineMax();

ti
.fromTo(
  '.victoria',
  2,
  {y: 0},
  {y: -60}
)
.fromTo (
  '.spicer',
  2,
  {y: 90},
  {y: -50},
  '-=2'
)

let scene2 = new ScrollMagic.Scene({
  triggerHook: 'seciton',
  duration: '100%',
  triggerHook: 0.5

})
.setTween(ti)
.addTo(control)

let al = new TimelineMax();

al
.fromTo(
  '.dots',
  1,
  {y: -150},
  {y: 0},
)
.fromTo(
  '.animation-text',
  3,
  {y: 30},
  {y: 0}
)
.fromTo(
  '.animation-text',
  3,
  {opacity: 0},
  {opacity: 1},
  '-=3'
)
.fromTo(
  '.animate-background',
  1,
  {opacity: 1},
  {opacity: 0}
)
