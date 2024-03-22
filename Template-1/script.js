function locoScroll(){
    gsap.registerPlugin(ScrollTrigger);

const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true,

  tablet: { smooth: true },
  smartphone: { smooth: true }
});
locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy(".main", {
  scrollTop(value) {
    return arguments.length
      ? locoScroll.scrollTo(value, 0, 0)
      : locoScroll.scroll.instance.scroll.y;
  },
  getBoundingClientRect() {
    return {
      top: 0,
      left: 0,
      width: window.innerWidth,
      height: window.innerHeight
    };
  }

});

ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

ScrollTrigger.refresh();
}

locoScroll();

function cursorEffect(){
    var page1Content = document.querySelector(".page1-content")
var cursor = document.querySelector(".cursor")

//cursor follow mouse with gsap
page1Content. addEventListener("mousemove",function(dets){
    gsap.to(".cursor",{
        x:dets.x,
        y:dets.y
    })
    //implementing cursor follow without gsap
    //cursor.style.left = dets.x + "px"
    //cursor.style.top = dets.y + "px"
})

page1Content.addEventListener("mouseenter",function(){
    gsap.to(".cursor",{
        scale:1,
        opacity: 1
    })
})

page1Content.addEventListener("mouseleave",function(){
    gsap.to(".cursor",{
        scale:0,
        opacity: 0
    })
})
}
cursorEffect();

function page2Animation(){
    gsap.from(".elem h1",{
        y:120,
        stagger:0.1,
        duration: 1,
        scrollTrigger: {
            trigger: "#page2",
            scroller: ".main",
            start: "top 47%",
            end: "top 46%",
            scrub: 5
        }
    })
}
page2Animation();

function swipperAnimation(){
var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    slidePerView: 1,
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: true,
    }
});
}

swipperAnimation();

function footerAnimation(){
    gsap.from(".bottom h1",{
        y:120,
        stagger:0.1,
        duration: 1,
        scrollTrigger: {
            trigger: "#footer",
            scroller: ".main",
            start: "top 47%",
            end: "top 46%",
            scrub: 5
        }
    })
}

footerAnimation();

function page3Animation(){
    gsap.from(".elements h1",{
        y:120,
        stagger:0.1,
        duration: 1,
        scrollTrigger: {
            trigger: "#page3-5",
            scroller: ".main",
            start: "top 47%",
            end: "top 46%",
            scrub: 5
        }
    })
}
page3Animation();
