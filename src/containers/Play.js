import * as Tone from 'tone'
import Instrument from '../containers/Instrument.js'
import Visual from '../containers/Visual.js'
import {useState, useEffect} from 'react'

const Play =() => {

    const [playlist, setPlaylist] = useState([
        {
            title: "SongOne", 
            songData: ["a", "s", "s", "a"]
        }
    ])    
    const [song, setSong] = useState([])
    const [lastKey, setLastKey] = useState("")
    const [title, setTitle] = useState("")
    
    const [keyMap, setKeyMap] = useState({
        "a": {keyPress: "a", note: "C4", color: "red", shape: "circle", beat:"8n"},
        "s": {keyPress: "s", note: "D4", color: "blue", shape: "circle", beat:"8n"}
    })

    useEffect(() => {
        document.addEventListener('keydown', ({ key }) => playKey(key))
    }, [])

    // this useEffect saves an array of lastKeys played in the song state.
    useEffect(() => {
        if(lastKey.length === 1){
            setSong([...song, lastKey]);
        }
    }, [lastKey])

    const synth = new Tone.Synth().toDestination();

    const playKey = function(key) {
        if (!Object.keys(keyMap).includes(key)) return;
        const { note, beat } = keyMap[key]
        synth.triggerAttackRelease(note, beat)
        setLastKey(key)
        setTimeout(() => setLastKey(""), 1000)
    }

    // const replayKey = playlist[0].songData.forEach((key) => {
    //    playKey(key)
    //  }) 

    // const replayPlaylist = () => {
    //     setInterval(replayKey, 60000)
    // }
    const handleTitleChange = (event) => {
        setTitle(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const titleToSubmit = title.trim()
        const newSong = {title: titleToSubmit, songData: song}
        const updatedPlaylist = [...playlist, newSong]
        setPlaylist(updatedPlaylist)
        setSong([])
    }

    // const seq = new Tone.Sequence((time, note) => {
    //     synth.triggerAttackRelease(note, 0.1, time);
        
    //     // subdivisions are given as subarrays
    // }, ["C4", ["E4", "D4", "E4"], "G4", ["A4", "G4"]]).start(0);
    // Tone.Transport.start();

    return(
        <>
        <h1> This is the Play container</h1>
        <Visual />
        <Instrument pads={keyMap} onKeyClick={playKey} lastKey={lastKey} />
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                placeholder="title" 
                value={title}
                onChange={handleTitleChange} 
            />
            <input type="submit" value="POST" />
        </form>
        <button>Save song</button>
        <button >Play/Pause</button>
        </>
    )
}

export default Play




// i'm still here