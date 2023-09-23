// import { gsap } from "gsap";
gsap.registerPlugin(CSSPlugin);

const icon =document.querySelectorAll('.navbar , .icon-list img , label');
const titlePhoto = document.querySelectorAll('.desc-container p');
const opac= document.querySelectorAll(' button , .sentence ');


window.addEventListener('load', () => {
    const TL= gsap.timeline({paused :true});

    TL
    .staggerFrom(titlePhoto, 0.5, { left:-100, opacity: 0, ease: "power2.out"},0.3)
    .staggerFrom(icon, 1 ,{ top:-50 ,opacity:0, ease:'power2.out'},0.3, '-=1')
    .from(opac, 1, {transform: "scale(0)", ease: "power2.out"},0.3, '-=2')
    ;

    TL.play();
});