
const icon =document.querySelectorAll('.skills-content');

window.addEventListener('load', () => {
    const TL= gsap.timeline({paused :true});

    TL.staggerFrom(icon, 1 ,{ top:-70 ,opacity:0, ease:'power2.out'},0.25)
    TL.staggerFrom(icon, 1 ,{ transform:'scale(1.1)', ease:'power2.out'},0.25,"-=1");

    TL.play();
});