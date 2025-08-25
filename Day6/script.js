// gsap.registerPlugin(ScrollTrigger);

gsap.from("#page1 #box", {
  scale: 2,
  duration: 2,
  opacity: 0,
  delay: 1,
  rotate: 360
});

gsap.from("#page2 #box", {
  x: -900,
  duration: 3,
  scrollTrigger: {
    trigger: "#page2 #box h1",
    scrub: 1
  }
});

gsap.from("#page3 #box", {
    x:500,
  duration: 1,
  opacity: 0,
  delay: 1,
  rotate: 0,
  scrollTrigger:{
    trigger:"#page3 #box",
    scrub: 1
  }
});