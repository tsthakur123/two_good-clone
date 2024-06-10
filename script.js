const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

function loadingAnimation(){
    var nav = document.querySelector('nav');
    gsap.from(nav, {
        opacity: 0,
        y: -20,
        ease: Expo.easeInOut,
        duration: .5
    })
    
    gsap.from('#page1 #headertxt h1', {
        y: "100%",
        opacity: 0,
        ease: Expo.easeInOut,
        duration: 1,
        stagger: .2
    })
    gsap.from(video, {
        y: "10%",
        opacity: 0,
        ease: Expo.easeInOut,
        duration: 2,
    })
}
loadingAnimation();

function videoconAnimation(){
    var play = document.querySelector('#play');

var video = document.querySelector('video');

video.addEventListener('mousemove', function(dets){
    gsap.to(play, {
        x: dets.clientX,
        y: dets.clientY - video.getBoundingClientRect().top,
        scale: 1,
    })
})
video.addEventListener('mouseleave', function(dets){
    gsap.to(play, {
        scale: 0,
    })
})
}
videoconAnimation();

