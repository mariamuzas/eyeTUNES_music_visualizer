import * as Tone from 'tone'
import Instrument from './Instrument.js'
import Visual from './Visual.js'
import {useState, useEffect} from 'react'


const Play =({playlist}) => {
   
    const [song, setSong] = useState([])
    const [currentSong, setCurrentSong] = useState([])
    const [lastKey, setLastKey] = useState("")
    const [title, setTitle] = useState("")

    const [playState, setPlayState] = useState(false)
    const [isPlayingSong, setIsPlayingSong] = useState(false)
    const [placeInSong, setPlaceInSong] = useState(0)
    const [lastTimeout, setLastTimeout] = useState(null)
    
    const [keyMap, setKeyMap] = useState({
        "a": {keyPress: "a", note: "C4", color: "FC2424", shape: "circle", beat:"8n"},
        "s": {keyPress: "s", note: "D4", color: "45B69C", shape: "circle", beat:"8n"},
        "d": {keyPress: "d", note: "E4", color: "FF8C42", shape: "circle", beat:"8n"},
        "f": {keyPress: "f", note: "F4", color: "E4FF1A", shape: "circle", beat:"8n"},
        "g": {keyPress: "g", note: "G4", color: "6EEB83", shape: "circle", beat:"8n"},
        "h": {keyPress: "h", note: "A4", color: "C8A2C8", shape: "circle", beat:"8n"},
        "j": {keyPress: "j", note: "B4", color: "6AB547", shape: "circle", beat:"8n"},
        "k": {keyPress: "k", note: "C5", color: "EC058E", shape: "circle", beat:"8n"},
        "l": {keyPress: "l", note: "D5", color: "4D9DE0", shape: "circle", beat:"8n"}
    })

    useEffect(() => {
        document.addEventListener('keydown', ({ key }) => playKey(key))
    }, [])

    // this useEffect saves an array of lastKeys played in the song state.
    useEffect(() => {
        if(!isPlayingSong && lastKey.length === 1 ){ // only if the song !isPlaying
            setSong([...song, lastKey]);
        }
    }, [lastKey])

    const synth = new Tone.Synth().toDestination();

    const playKey = function(key) {
        if (!Object.keys(keyMap).includes(key)) return;
        const { note, beat } = keyMap[key]
        synth.triggerAttackRelease(note, beat)
        setLastKey(key)
        setTimeout(() => setLastKey(""), 250)
    }

    const handleTitleChange = (event) => {
        setTitle(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const titleToSubmit = title.trim()
        const newSong = {title: titleToSubmit, songData: song}
        const updatedPlaylist = [...playlist, newSong]
        // setPlaylist(updatedPlaylist)
        setCurrentSong(newSong.songData)
        setSong([])
    }

    const replaySong = (song, index=0, time=350) => {
        if (index >= song.length) {
            setIsPlayingSong(false)
            setPlayState(false)
            return;
        }

        const currentKey = song[index]
        playKey(currentKey)

        setPlaceInSong(index + 1)
        setLastTimeout(setTimeout(() => replaySong(song, index + 1), time))
    }

    useEffect(() => {
        if (isPlayingSong && playState) {
            replaySong(currentSong, placeInSong)
        } else if (!playState) {
            clearTimeout(lastTimeout)
        } else if (playState) {
            setIsPlayingSong(true) 
            replaySong(currentSong)
        } 
    }, [playState])

    const handlePauseResumeClick = (evt) => {
        setPlayState((!isPlayingSong || !playState))
    } 

    return(
        <>
            {/* <h1> This is the Play container</h1> */}
            <Visual lastKey={lastKey} pads={keyMap} />
            <Instrument pads={keyMap} onKeyClick={playKey} lastKey={lastKey} />
            {/* <p>{playlist[0][title]}</p> */}
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    placeholder="title" 
                    value={title}
                    onChange={handleTitleChange} 
                />
                <input type="submit" value="POST" />
            </form>
            <button onClick={handlePauseResumeClick}>{(playState && isPlayingSong) ? "Pause" : "Play"}</button>
        </>
    )
}

export default Play
