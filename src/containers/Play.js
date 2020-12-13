import Instrument from '../containers/Instrument.js'
import Visual from '../containers/Visual.js'

const Play =() => {

    return(
        <>
        <h1> This is the Play container</h1>
        <Visual />
        <Instrument />
        <button>Play/Pause</button>
        </>
    )
}

export default Play;

