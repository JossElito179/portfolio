gsap.registerPlugin(CSSPlugin);

const plugins=document.querySelectorAll('.photo , .title , .desc');

window.addEventListener('load',() => {
    const TL=gsap.timeline({paused:true});
    TL.staggerFrom(plugins,1,{opacity:0,left:-50,ease:"power2.inOut"},0.3);

    TL.play();
});