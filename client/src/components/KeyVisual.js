import styled from 'styled-components';
import anime from 'animejs';
import './KeyVisual.css'
import { useState, useEffect } from 'react';
import React from 'react'

const StyledKeyVisual = styled.div.attrs(props => {
    return {
        style:{
            backgroundColor: '#'+props.color
        }
    }
})`
    width: 20px;
    height: 20px;
    border-radius: 100%;
    margin: auto;
    margin-top: 10vh;
    z-index: 1;
    grid-area: dot;
    align-items: center;
`

const distance = 100;
const variance = 80;
const directionalTranslates = [
    {
        x: 0,
        y: 0
    },
    {
        x: 0,
        y: 1
    },
    {
        x: 1,
        y: 1
    },
    {
        x: 1,
        y: 0
    },
    {
        x: 1,
        y: -1
    },
    {
        x: 0,
        y: -1
    },
    {
        x: -1,
        y: -1
    },
    {
        x: -1,
        y: 0
    },
    {
        x: -1,
        y: 1
    },
]

const KeyVisual = ({color, playState, padKey}) => {

    const [animations, setAnimations] = useState(null)
    const [circles, setCircles] = useState([])

    const createCircles = () => {
        let newCircles = []
        directionalTranslates.forEach((translation, i) => {
            newCircles = [...newCircles, <StyledKeyVisual key={i} color={color} playState={playState} className={`${padKey}-visual-${i}`}/>]
        })
        setCircles(newCircles)
    }

    useEffect(() => {
        let newAnimations = []
        directionalTranslates.forEach((translation, i) => {
            newAnimations = [...newAnimations, anime({
                targets: `div.${padKey}-visual-${i}`,
                autoplay: false,
                // backgroundColor: invert('#'+color).padStart(6,"0"),
                borderRadius: '25%',
                translateY:[
                    {value: (translation.y * (distance + Math.floor(Math.random() * variance))), duration: 400},
                ],
                translateX:[
                    {value: (translation.x * (distance + Math.floor(Math.random() * variance))), duration: 400}
                ],
                scale: [1, 4],
                opacity: [
                    {value: '0%', duration: 0},
                    {value: '10%', duration: 45},
                    {value: '30%', duration: 75},
                    {value: '80%', duration: 65},
                    {value: '500%', duration: 277},
                    {value: '0%', duration: 6}
                ],
                easing: 'easeOutBounce(1, .8)'
            })]
        })
        setAnimations(newAnimations)
    }, [circles])


    useEffect(() => {
        if (playState) {
            console.log(animations)
            animations.forEach(animation => {
                animation.restart()
                animation.play()    
            })
        }
    }, [playState])

    useEffect(() =>{
        createCircles()
    }, [])

    return(
        <>
            <div className="animation-container fireworks">
                {circles}
            </div>
        </>
    )
}

export default KeyVisual;