const animationTimeline = () =>{
    const textboxChars = document.getElementsByClassName('textbox__chat')[0];
    const hbd = document.getElementsByClassName('wish__hbd')[0];

    textboxChars.innerHTML = `<span>${textboxChars.innerHTML
        .split('').join('</span><span>')}</span>`
    
    hbd.innerHTML = `<span>${hbd.innerHTML
        .split('').join('</span><span>')}</span>`
    
    const ideaTextTrans = {
        opacity: 0,
        y : -20,
        rotationX:5, 
        skewX: '15deg'
    }

    const ideaTextTransLeave = {
        opacity : 0,
        y:20,
        rotationY:5,
        skewX:'-15deg'
    }

    const tl = new TimelineMax();


    tl.to('.container', 0.6,{
        visibility : 'visible'
    })

    .from('.one', 0.7,{
        opacity: 0,
        y : 10
    })
    .from('.two', 0.4,{
        opacity : 0,
        y : 10
    })
    .to('.one', 0.7,{
        opacity : 0,
        y : 10
    }, '+=3')
    .to('.two', 0.7,{
        opacity: 0,
        y:10
    }, '-=1')

    .from('.three', 0.7,{
        opacity: 0,
        y : 10
    })
    .to('.three', 0.7,{
        opacity: 0,
        y : 10
    }, '+=3')

    .from('.four', 0.7,{
        opacity:0,
        scale: 0.2
    })
    .from('.fake__button', 0.3,{
        opacity : 0,
        scale: 0.2
    })
    .staggerTo('.textbox__chat span', 1.5,{
        visibility:'visible'
    }, 0.05)
    .to('.fake__button', 0.1,{
        backgroundColor: 'rgb(127, 206, 248)'
    }, '+=4')
    .to('.four', 0.5,{
        opacity : 0,
        scale: 0.2,
        y:-150
    }, '+=1')

    .from('.idea__1', 0.7, ideaTextTrans)
    .to('.idea__1', 0.7, ideaTextTransLeave,'+=3.5')
    .from('.idea__2', 0.7, ideaTextTrans)
    .to('.idea__2', 0.7, ideaTextTransLeave,'+=5')
    .from('.idea__3', 0.7, ideaTextTrans)
    
    .to('.idea__3 strong', 0.5,{
        scale:1,
        x:10,
        // backgroundColor:'black',
        textDecoration:'underline',
        // color:'#fff'
    })
    .to('.idea__3', 0.7, ideaTextTransLeave,'+=3')
    .from('.idea__4', 0.7, ideaTextTrans)
    .to('.idea__4', 0.7, ideaTextTransLeave,'+=2.5')

    .from('.idea__5', 0.7,{
        rotationX : 15,
        rotationY:-10,
        skewY: '-15deg',
        y: 50,
        z:10,
        opacity: 0
    }, "+=1.5")
    .to('.idea__5 span', 0.7,{
        rotation: 90,
        x:8
    }, '+=4')
    .to('.idea__5', 0.7,{
        opacity:0,
        scale: 0.2
    }, '+=3')

    .staggerFrom('.idea__6 span', 0.8,{
        scale: 3,
        opacity:0,
        rotation: 15,
        ease: Expo.easeOut
    }, 0.2)
    .staggerTo('.idea__6 span', 0.8,{
        scale:3,
        opacity: 0,
        rotation : -15,
        ease : Expo.easeOut
    }, 0.2, '+=1.5')

    .from('.profile', 0.5,{
        opacity:0,
        scale:0.5,
        x:25,
        y:-25,
        rotationZ:-45
    }, '+=2')
    .staggerFrom('.wish__hbd span', 0.7, {
        opacity : 0,
        y : -50,
        rotation: 150,
        skewX:'30deg',
        ease: Elastic.easeOut.config(1, 0.5)
    }, 0.1)
    .staggerFromTo('.wish__hbd span', 0.7,{
        scale: 1.4,
        rotateY:150
    },{
        scale: 1,
        rotateY:0,
        color: '#ff69b', 
        ease: Expo.easeOut
    }, 0.1, 'party')
    .from('.wish h5', 0.5,{
        opacity: 0,
        y:10,
        skewX: '-15deg'
    }, 'party')

}

animationTimeline();