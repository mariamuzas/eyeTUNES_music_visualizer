import styled from 'styled-components';
import anime, { random } from 'animejs';
import './KeyVisual.css'
import { useState, useEffect } from 'react';
import invert from 'invert-color'

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
`

const distance = 100;
const variance = 80;
const directionalTranslates = [
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
            newCircles = [...newCircles, <StyledKeyVisual color={color} playState={playState} className={`${padKey}-visual-${i}`}/>]
        })
        setCircles(newCircles)
    }

    useEffect(() => {
        let newAnimations = []
        directionalTranslates.forEach((translation, i) => {
            newAnimations = [...newAnimations, anime({
                targets: `div.${padKey}-visual-${i}`,
                autoplay: false,
                backgroundColor: invert('#'+color).padStart(6,"0"),
                borderRadius: '20%',
                translateY:[
                    {value: (translation.y * (distance + Math.floor(Math.random() * variance))), duration: 545},
                ],
                translateX:[
                    {value: (translation.x * (distance + Math.floor(Math.random() * variance))), duration: 545}
                ],
                scale: [1, 6],
                opacity: [
                    {value: '0%', duration: 0},
                    {value: '100%', duration: 90},
                    {value: '80%', duration: 50},
                    {value: '70%', duration: 30},
                    {value: '0%', duration: 375}
                ],
                easing: 'easeOutBounce'
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