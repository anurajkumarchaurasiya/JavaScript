let tl = gsap.timeline();

gsap.set(".a", {opacity:0, y: 10})
gsap.set("#right img", {opacity: 0, y:10, scale: 1.6})

tl.from("#left" , {
    width:0,
    ease: Expo.easeInOut,
    duration: 1
})
.from("#right", {
    width:0,
    ease: Expo.easeInOut,
    duration:1
})
.to(".a",{
    delay: -1,
    stagger: .2,
    opacity: 1, 
    y: 0,
    ease: Expo.easeInOut,
    duration: 1
})
.to("#right img",{
    delay: -1,
    opacity: 1,
    y:0,
    scale:1,
    ease: Expo.easeInOut,
    duration:2
})
