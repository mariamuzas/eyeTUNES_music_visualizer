import * as Tone from 'tone'
import Instrument from '../containers/Instrument.js'
import Visual from '../containers/Visual.js'
import {useState, useEffect} from 'react'

const Play =() => {

    const [lastKey, setLastKey] = useState("")
    const [keyMap, setKeyMap] = useState({
        "a": {keyPress: "a", note: "C4", color: "red", shape: "50, 160 55, 180 70, 180 60, 190 65, 205 50, 195 35, 205 40, 190 30, 180 45, 180", beat:"8n"},
        "s": {keyPress: "s", note: "D4", color: "blue", shape: "circle", beat:"8n"},
        "d": {keyPress: "d", note: "E4", color: "yellow", shape: "circle", beat:"8n"},
        "f": {keyPress: "f", note: "F4", color: "green", shape: "circle", beat:"8n"},
        "g": {keyPress: "g", note: "G4", color: "antiquewhite", shape: "circle", beat:"8n"},
        "h": {keyPress: "h", note: "A5", color: "violet", shape: "circle", beat:"8n"},
        "j": {keyPress: "j", note: "B5", color: "greenyellow", shape: "circle", beat:"8n"},
        "k": {keyPress: "k", note: "C5", color: "purple", shape: "circle", beat:"8n"},
        "l": {keyPress: "l", note: "D5", color: "lightcoral", shape: "circle", beat:"8n"}
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
        {/* <h1> This is the Play container</h1> */}
        <Visual lastKey={lastKey} pads={keyMap}/>
        <Instrument pads={keyMap} onKeyClick={playKey} lastKey={lastKey} />
        <button>Play/Pause</button>
        </>
    )
}

export default Play