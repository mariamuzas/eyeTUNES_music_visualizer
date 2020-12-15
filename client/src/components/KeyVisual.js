import styled from 'styled-components';
import anime from 'animejs';
import { useState, useEffect } from 'react';

const StyledKeyVisual = styled.div.attrs(props => {
    return {
        style:{
            // animationPlayState: (props.play) ? "running" : "paused",
            backgroundColor: props.color,
            // backgroundImage: props.shape

        }
    }
})`
    position: centre;
    width: 50px;
    height: 50px;
    border-radius: 100%;
    margin: auto;
    margin-top: 10vh;
`

const SquareVisual = styled(StyledKeyVisual)`
    width: 5px;
    height: 5px;
    border-radius: 0%;
`
const SquareVisualBig = styled(StyledKeyVisual)`
    width: 10px;
    height: 10px;
    border-radius: 0%;
`

// const TriangleVisualBig = styled(StyledKeyVisual)`
//     width: 15px;
//     height: 15px;
//     border-left: 50px solid transparent;
//     border-right: 50px solid transparent;
//     border-bottom: 100px solid red;
// `

const KeyVisual = ({color, playState, padKey}) => {

    const [animation, setAnimation] = useState(null)

    useEffect(()=> {
        setAnimation(anime({
            targets: `div.${padKey}-visual`,
            autoplay: false,
            translateY:[
                {value: 100, duration: 375},
                // {value: 0, duration: 350}
            ],
            translateX:[
                {value: 0, duration: 375},
                // {value: 0, duration: 350}
            ],
            translateZ:[
                {value: 0, duration: 375},
            ],
            scale: [4, 10],
            opacity: [
                {value: '0%', duration: 0},
                {value: '100%', duration: 100},
                {value: '0%', duration: 500}
            ],
            easing: 'easeOutBounce'
        }))
    }, [])

    useEffect(() => {
        if (!animation) return;
        if (playState) {
            animation.play()
        }
    }, [playState])

    return(
        <>
            <StyledKeyVisual color={color} playState={playState} className={`${padKey}-visual`}/>
            <SquareVisualBig color={color} playState={playState} className={`${padKey}-visual`}/>
            {/* <TriangleVisualBig color={color} playState={playState} className={`${padKey}-visual`}/> */}
            <SquareVisual color={color} playState={playState} className={`${padKey}-visual`}/>
            
        </>
    )
}

export default KeyVisual;