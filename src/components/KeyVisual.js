import styled from 'styled-components';
import anime from 'animejs';
// import { useRef } from 'react';

const StyledKeyVisual = styled.div.attrs(props => {
    return {
        class:`${props.padKey}-visual`,
        style:{
            animationPlayState: (props.play) ? "running" : "paused",
            backgroundColor: props.color
        }
    }
})`
    position: relative;
    width: 100px;
    height: 100px;
    margin: 4px;
    display: inline-block;
`


const KeyVisual = ({color, playState, padKey}) => {

    // const keyRef = useRef(null)

    anime({
        targets: `div.${padKey}-visual`,
        translateX:[
            {value: 200, duration: 500},
            {value: 0, duration: 800}
        ],
        rotate: {
            value: '1turn',
            easing: 'easeInOutSine'
        }
    })


    return(
        <StyledKeyVisual color={color} playState={playState} padKey={padKey}/>
    )
}

export default KeyVisual;