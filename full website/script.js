function videoconAnimation(){
    var videocon = document.querySelector("#video-container")
var playbtn = document.querySelector("#play")
videocon.addEventListener("mouseenter",function(){
    // alert("hey")
    gsap.to(playbtn,{
        scale:1,
        opacity:1
    })
    // playbtn.style.opacity = 1
    // playbtn.style.scale =1
})
videocon.addEventListener("mouseleave",function(){
    // alert("hey")
    gsap.to(playbtn,{
        scale:0,
        opacity:0
    })
    // playbtn.style.opacity = 0
    // playbtn.style.scale =0
})
videocon.addEventListener("mousemove",function(dets){
    gsap.to(playbtn,{
        left:dets.x-70,
        top:dets.y-80
    })
})
}
videoconAnimation()

function loadingAnimation(){
    gsap.from("#page1 h1", {
        y:30,
        opacity:0,
        delay:0.5,
        duration :0.8,
        stager:0.2
    })
    gsap.from("#page1 #video-container", {
        scale:0.9,
        opacity:0,
        delay:0.2,
        duration :0.3,
        stager:0.2
    })
}
loadingAnimation()