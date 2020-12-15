import * as Tone from 'tone'
import Instrument from '../containers/Instrument.js'
import Visual from '../containers/Visual.js'
import {useState, useEffect} from 'react'

const Play =() => {

    const [lastKey, setLastKey] = useState("")
    const [keyMap, setKeyMap] = useState({
        "a": {keyPress: "a", note: "C4", color: "red", shape: "circle", beat:"8n"},
        "s": {keyPress: "s", note: "D4", color: "blue", shape: "circle", beat:"8n"}
    })

    useEffect(() => {
        document.addEventListener('keydown', ({ key }) => playKey(key))
    }, [])

    const synth = new Tone.Synth().toDestination();

    const playKey = function(key) {
        if (!Object.keys(keyMap).includes(key)) return;
        const { note, beat } = keyMap[key]
        synth.triggerAttackRelease(note, beat)
        setLastKey(key)
        setTimeout(() => setLastKey(""), 500)
    }

    return(
        <>
        <h1> This is the Play container</h1>
        <Visual lastKey={lastKey} pads={keyMap}/>
        <Instrument pads={keyMap} onKeyClick={playKey} lastKey={lastKey} />
        <button>Play/Pause</button>
        </>
    )
}

export default Play