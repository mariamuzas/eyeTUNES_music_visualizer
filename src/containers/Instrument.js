import Key from '../components/Key.js'
import SongInput from '../components/SongInput.js'
import { Tone } from "tone/build/esm/core/Tone"

const Instrument = ({keys, onKeyClick, loaded}) => {

    // const keyBoard = keys.map((key, i) => {
    //     return (<Key key={i} individualKey={key[key]} onKeyClick ={onKeyClick}> </Key>)
    // }) 
    
    return(
        <>
        <h2>this is the Instrument container</h2>
        <ul>
            {/* {keyBoard} */}
        </ul>
        <SongInput />
        </>
    )
}

export default Instrument;