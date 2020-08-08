const flightpath={
    curviness:2,
    autoRotate:true,
    values:[
        {x:100,y:-20},
        {x:300,y:100},
        {x:500,y:-100},
        {x:750,y:100},
        {x:950,y:-150},
        {x:350,y:-150},
        {x:1000,y:150},
        {x:window.innerWidth,y:-490},

    ]
}

const tween =new TimelineLite();

tween.add(

    TweenLite.to('.paper',2,{
        bezier:flightpath,
        ease:Power1.easeInOut,
    })
);
const controller = new ScrollMagic.Controller();

const scene =new ScrollMagic.Scene({
    duration: 3000,
    triggerElement: '.animation',
    triggerHook: 0
}).setPin('.animation').setTween(tween).addTo(controller);