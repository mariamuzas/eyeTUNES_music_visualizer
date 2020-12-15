import Key from '../components/Key.js'
import { Tone } from "tone/build/esm/core/Tone"
import './Instrument.css';

const Instrument = ({pads, onKeyClick, loaded, lastKey}) => {

    const keyBoard = Object.keys(pads).map((pad, i) => {
        return (<Key key={i} individualPad={pads[pad]} isLastPad={lastKey === pad} onKeyClick ={onKeyClick}> </Key>)
    }) 
    
    return(
        <>
        {/* <h2>this is the Instrument container</h2> */}
        <ul className="instrument-container">
            {keyBoard}
        </ul>
        </>
    )
}

export default Instrument;