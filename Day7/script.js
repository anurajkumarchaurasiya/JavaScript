let menu = document.querySelector("#nav-ptr2 i")
let full = document.querySelector("#ful-scr-nav")
let flag = 0;
menu.addEventListener("click", function () {

    if (flag == 0) {
        full.style.top = "0%"
        document.querySelector("#nav h2").style.color = "#222"
        document.querySelector("#nav i").style.color = "#222"
        document.querySelector("#nav h3").style.color = "#222"
        flag = 1
    }else{
        full.style.top = "-100%"
        document.querySelector("#nav h2").style.color = "#dadada"
        document.querySelector("#nav i").style.color = "#dadada"
        document.querySelector("#nav h3").style.color = "#dadada"
        flag = 0
    }

})

let t1 = gsap.timeline();

t1.from("#page1 h1", {
    y: 60,
    duration: 0.6,       
    opacity: 0,      
})
.from("#page1 h2", {
    y: 50,
    duration: 0.4,       
    opacity: 0,   
    delay: 0.2   
})
.from("#page1 h3", {
    y: 40,
    duration: 0.2,       
    opacity: 0,      
});

gsap.to("#page2 img",{
    scale:1,
     scrollTrigger:{
        trigger:"#page2 img",
        start: "top 70%",
        scrub:3,
        end: " top 5%",
        // markers: true
     }
})

gsap.from("#page2 h1",{
    opacity:0,
    x:-300,
     scrollTrigger:{
        trigger:"#page2 img",
        start: "top -90%",
        scrub:3,
        end: " top 90%",
     }
})

let slide1h1 = document.querySelectorAll("#page6 .slide1-of-h1")
slide1h1.forEach(function(elem){
    gsap.to(elem,{
        transform:'translateX(-100%)',
        duration:4,
        scrollTrigger:{
            trigger:"#page6",
            scrub:3,
            // markers: true
        }
    })
})

let slide1h2 = document.querySelectorAll("#page6 .slide2-of-h1")
slide1h2.forEach(function(elem){
    gsap.to(elem,{
        transform:'translatex(100%)',
        duration:4,
        scrollTrigger:{
            trigger:"#page6",
            scrub:3,
            // markers: true
        }
    })
})