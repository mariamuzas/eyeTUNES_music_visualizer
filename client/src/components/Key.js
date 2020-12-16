import * as Tone from 'tone';
import styled from 'styled-components';
import { useState } from 'react';

let Pad = styled.li` 
height: 6vh;
width: 9vw;
margin: auto;
border: 2px solid white;
color: white;
font-size: 20pt;
text-align: center;
`

const Key = ({individualPad, onKeyClick, isLastPad}) => {
    
    const [currentColour, setCurrentColour] = useState(false);
    
    // When we click 'a' on keyboard - we want note to sound, and background colour to change
    let StyledPad = styled(Pad).attrs(props => ({
        style: {
            backgroundColor: "black"
        }
    }))`` 
    
    if (isLastPad) {
        StyledPad = styled(Pad).attrs(props => ({
            style: {
                backgroundColor: '#'+props.color
            }
        }))``
            
    }
   
    return (
        <div onClick={onKeyClick}>
            <StyledPad color={individualPad.color}>{individualPad.keyPress}</StyledPad>
        </div>
    )
}
    
export default Key