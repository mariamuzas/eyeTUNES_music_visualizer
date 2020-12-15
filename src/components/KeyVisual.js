import styled from 'styled-components';
import anime from 'animejs';
import { useState, useEffect } from 'react';

const StyledKeyVisual = styled.div.attrs(props => {
    return {
        style:{
            // animationPlayState: (props.play) ? "running" : "paused",
            backgroundColor: props.color
        }
    }
})`
    position: relative;
    width: 100px;
    height: 100px;
    border-radius: 100%;
    margin: 4px;
    display: block;
`


const KeyVisual = ({color, playState, padKey}) => {

    const [animation, setAnimation] = useState(null)

    useEffect(()=> {
        setAnimation(anime({
            targets: `div.${padKey}-visual`,
            autoplay: false,
            translateX:[
                {value: 200, duration: 375},
                // {value: 0, duration: 350}
            ],
            opacity: [
                {value: '0%', duration: 0},
                {value: '100%', duration: 1},
                {value: '0%', duration: 350}
            ],
            easing: 'easeOutSine'
        }))
    }, [])

    useEffect(() => {
        if (!animation) return;
        if (playState) {
            animation.play()
        }
    }, [playState])

    return(
        <StyledKeyVisual color={color} playState={playState} className={`${padKey}-visual`}/>
    )
}

export default KeyVisual;