import Key from '../components/Key.js'
import './Instrument.css';
import React from 'react'

const Instrument = ({pads, onKeyClick, loaded, lastKey}) => {

    const keyBoard = Object.keys(pads).map((pad, i) => {
        return (<Key key={i} individualPad={pads[pad]} isLastPad={lastKey === pad} onKeyClick ={onKeyClick}> </Key>)
    }) 
    
    return(
        <>
            <ul className="instrument-container">
                {keyBoard}
            </ul>
        </>
    )
}

export default Instrument;