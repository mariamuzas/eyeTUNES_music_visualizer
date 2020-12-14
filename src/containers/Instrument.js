import Key from '../components/Key.js'
import SongInput from '../components/SongInput.js'
import { Tone } from "tone/build/esm/core/Tone"

const Instrument = ({pads, onKeyClick, loaded, lastKey}) => {

    const keyBoard = Object.keys(pads).map((pad, i) => {
        return (<Key key={i} individualPad={pads[pad]} isLastPad={lastKey === pad} onKeyClick ={onKeyClick}> </Key>)
    }) 
    
    return(
        <>
        <h2>this is the Instrument container</h2>
        <ul>
            {keyBoard}
        </ul>
        <SongInput />
        </>
    )
}

export default Instrument;