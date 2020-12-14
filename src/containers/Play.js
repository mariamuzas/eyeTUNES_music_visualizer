import Instrument from '../containers/Instrument.js'
import Visual from '../containers/Visual.js'
import {useState} from 'react'

const Play =() => {

    const  [keys, setKeys] = useState ([
        {keyPress: "a", note: "C4", color: "red", shape: "circle", beat:"8n"}
    ])

    return(
        <>
        <h1> This is the Play container</h1>
        <Visual />
        <Instrument keys={keys} />
        <button>Play/Pause</button>
        </>
    )
}

export default Play;

