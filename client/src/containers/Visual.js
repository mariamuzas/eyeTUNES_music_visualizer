import './Visual.css';
import KeyVisual from '../components/KeyVisual'
import React from 'react'


const Visual =({lastKey, pads}) => {

    const keyVisuals = Object.values(pads).map(pad => (
        <KeyVisual color={pad.color} playState={pad.keyPress === lastKey} padKey={pad.keyPress}/>
    ))

    return(
        <div className="visual-container">
            { keyVisuals }
        </div>
    )
}

export default Visual;