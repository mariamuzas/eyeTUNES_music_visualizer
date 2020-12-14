import * as Tone from 'tone';
import styled from 'styled-components';
import { useState } from 'react';

let Pad = styled.li.attrs(props => ({
    style: {
        backgroundColor: props.color
    }
}))` 
    height: 20vh;
    width: 20vw;
    margin: 5px;`

const Key = ({individualPad, onKeyClick}) => {

    const [currentColour, setCurrentColour] = useState(false);

    // When we click 'a' on keyboard - we want note to sound, and background colour to change

    const whichColour = () => {
        if (currentColour) {
            Pad = styled.li.attrs(props => ({
                style: {
                    backgroundColor: "black"
                }
            })) 
            
        }
        else {
            Pad = styled.li.attrs(props => ({
                style: {
                    backgroundColor: props.color
                }
            }))
    }
}

     return (
         <>
            <Pad color={individualPad.color} onKeyClick={() => whichColour()}>{individualPad.keyPress}</Pad>
         </>
     )
}

export default Key