import Key from '../components/Key.js'
import SongInput from '../components/SongInput.js'
import { Tone } from "tone/build/esm/core/Tone"
import './Instrument.css';

const Instrument = ({pads, onKeyClick, loaded, lastKey}) => {

    const keyBoard = Object.keys(pads).map((pad, i) => {
        return (<Key key={i} individualPad={pads[pad]} isLastPad={lastKey === pad} onKeyClick ={onKeyClick}> </Key>)
    }) 
    
    return(
        <>
            <ul className="instrument-container">
                {keyBoard}
            </ul>
            <SongInput />
        </>
    )
}

export default Instrument;