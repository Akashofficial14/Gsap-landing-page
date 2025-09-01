function page1Animation(){
    var tl=gsap.timeline()
tl.from(".part1",{
    y:-30 ,
    duration:0.5,
    delay:0.2,
    opacity:0
});
tl.from("nav h4,nav button",{
    y:-30,
    duration:0.6,
    stagger:0.3,
    opacity:0
});
tl.from("#sec1p1 h1",{
    x:-300,
    opacity:0,
    duration:0.5
})
tl.from("#sec1p1 p",{
    x:-300,
    opacity:0,
    duration:0.4
})
tl.from("#sec1p1 button",{
    x:-300,
    opacity:0,
    duration:0.3
})
tl.from("#sec1p2 img",{
    opacity:0,
    x:30,
    duration:0.6,
    // delay:1

},"-=0.6")//used to give delay in minus
tl.from("#sec2p1 img",{
    y:30,
    opacity:0,
    duration:0.4,
    stagger:0.15
})

}

function page2Animation(){
    var tl2=gsap.timeline({
    scrollTrigger:{
     trigger:"#sec2",
     scroller:"body",
    //  markers:true,
     start:"top 75%",
     end:"top 0",
     scrub:2,
    //  overflow:"hidden"
}
})

tl2.from("#sec2p2",{
    y:50,
    opacity:0,
    overflow:"hidden"
   
})
tl2.from("#sec2p3 .line1",{
    x:-300,
    opacity:0,
    duration:0.6
},"deva")//deva naam jaha hoga wo sath me aaayege
tl2.from("#sec2p3 .line2",{
    x:300,
    opacity:0,
    duration:0.6
},"deva")
tl2.from("#sec2p3 .line3",{
    x:-300,
    opacity:0,
    duration:0.6
},"akku")//jaha jaha same nam (akku )hoga wo sath me aayega
tl2.from("#sec2p3 .line4",{
    x:300,
    opacity:0,
    duration:0.6
},"akku")
}

page1Animation()
page2Animation()