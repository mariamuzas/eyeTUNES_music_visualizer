import * as Tone from 'tone';
import styled from 'styled-components';
import { useState } from 'react';

let Pad = styled.li` 
height: 5vh;
width: 5vw;
margin: auto;
border: 2px solid white;
color: white;
font-size: 20pt;
text-align: center;
`




const StyledPad = styled(Pad).attrs(props => ({
    style: {
        backgroundColor: (props.isLastPad) ? props.color : 'black'
    }
}))``
     


const Key = ({individualPad, onKeyClick, isLastPad}) => {
    
    const [currentColour, setCurrentColour] = useState(false);
    
    
    console.log(individualPad.keyPress)
    console.log(individualPad.color)
    return (
        <div onClick={onKeyClick}>
            <StyledPad color={individualPad.color} isLastPad={isLastPad}>{individualPad.keyPress}</StyledPad>
        </div>
    )
}
    
    export default Key