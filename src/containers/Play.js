import * as Tone from 'tone'
import Instrument from '../containers/Instrument.js'
import Visual from '../containers/Visual.js'
import {useState, useEffect} from 'react'

const Play =() => {

    const [keyMap, setKeyMap] = useState({
        "a": {keyPress: "a", note: "C4", color: "red", shape: "circle", beat:"8n"},
        "s": {keyPress: "s", note: "D4", color: "blue", shape: "circle", beat:"8n"}
    })

    useEffect(() => {
        document.addEventListener('keydown', ({ key }) => playKey(key))
        // setLoaded(true)
    }, [])


    const playKey = function(key) {
        const synth = new Tone.Synth().toDestination()
        const { note, beat } = keyMap[key]
        synth.triggerAttackRelease(note, beat)
    }

    return(
        <>
        <h1> This is the Play container</h1>
        <Visual />
        <Instrument keys={keyMap} onKeyClick={playKey} />
        <button>Play/Pause</button>
        </>
    )
}

export default Play




// i'm still here