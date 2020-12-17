import * as Tone from 'tone'
import Instrument from '../containers/Instrument.js'
import SongForm from '../components/SongForm.js'
import Visual from '../containers/Visual.js'
import {useState, useEffect, useCallback} from 'react'
import UserPlaylist from '../components/UserPlaylist.js'
import React from 'react'



const Play =({addPlaylist, playlist,  onDeleteSubmit}) => {
   
    const [song, setSong] = useState([])
    const [currentSong, setCurrentSong] = useState([])
    const [lastKey, setLastKey] = useState("")

    const [playState, setPlayState] = useState(false)
    const [isPlayingSong, setIsPlayingSong] = useState(false)
    const [placeInSong, setPlaceInSong] = useState(0)
    const [lastTimeout, setLastTimeout] = useState(null)
    const [isPlayMode, setIsPlayMode] = useState(true)
    const [isShowingForm, setIsShowingForm] = useState(false)
    const [isMusicOn, setIsMusicOn] = useState(true)
    const [text, setText] = useState("")

    const [keyMap, setKeyMap] = useState({
        "q": {keyPress: "Q", note: "B3", color: "DFFF00", shape: "circle", beat:"8n"},
        "w": {keyPress: "W", note: "C#4", color: "DE3163", shape: "circle", beat:"8n"},
        "e": {keyPress: "E", note: "D#4", color: "6495ED", shape: "circle", beat:"8n"},
        "r": {keyPress: "R", note: "D#4", color: "800080", shape: "circle", beat:"8n"},
        "t": {keyPress: "T", note: "F#4", color: "6EEB83", shape: "circle", beat:"8n"},
        "y": {keyPress: "Y", note: "G#4", color: "C8A2C8", shape: "circle", beat:"8n"},
        "u": {keyPress: "U", note: "B4", color: "40E0D0", shape: "circle", beat:"8n"},
        "i": {keyPress: "I", note: "B4", color: "FCBA04", shape: "circle", beat:"8n"},
        "o": {keyPress: "O", note: "C#5", color: "2479FC", shape: "circle", beat:"8n"},
        "p": {keyPress: "P", note: "D#5", color: "00FA9A", shape: "circle", beat:"8n"},
        
        "a": {keyPress: "A", note: "C4", color: "FC2424", shape: "circle", beat:"8n"},
        "s": {keyPress: "S", note: "D4", color: "96F550", shape: "circle", beat:"8n"},
        "d": {keyPress: "D", note: "E4", color: "FF8C42", shape: "circle", beat:"8n"},
        "f": {keyPress: "F", note: "F4", color: "E4FF1A", shape: "circle", beat:"8n"},
        "g": {keyPress: "G", note: "G4", color: "6EEB83", shape: "circle", beat:"8n"},
        "h": {keyPress: "H", note: "A4", color: "CCCCFF", shape: "circle", beat:"8n"},
        "j": {keyPress: "J", note: "B4", color: "6AB547", shape: "circle", beat:"8n"},
        "k": {keyPress: "K", note: "C5", color: "EC058E", shape: "circle", beat:"8n"},
        "l": {keyPress: "L", note: "D5", color: "4D9DE0", shape: "circle", beat:"8n"},
        "'": {keyPress: "apostrophe", note: "E5", color: "F9627D", shape: "circle", beat:"8n"},
        
        "z": {keyPress: "Z", note: "C3", color: "F17021", shape: "circle", beat:"8n"},
        "x": {keyPress: "X", note: "D3", color: "EBF121", shape: "circle", beat:"8n"},
        "c": {keyPress: "C", note: "E3", color: "90FCDA", shape: "circle", beat:"8n"},
        "v": {keyPress: "V", note: "F3", color: "A6B1E1", shape: "circle", beat:"8n"},
        "b": {keyPress: "B", note: "G3", color: "FF6F59", shape: "circle", beat:"8n"},
        "n": {keyPress: "N", note: "A3", color: "4C6085", shape: "circle", beat:"8n"},
        "m": {keyPress: "M", note: "B3", color: "F662E9", shape: "circle", beat:"8n"},
        ",": {keyPress: "comma", note: "C3", color: "90DDFC", shape: "circle", beat:"8n"},
        ".": {keyPress: "full-stop", note: "C4", color: "A50104", shape: "circle", beat:"8n"},
        " ": {keyPress: "space", note: "C4", color: "FFFFFF", shape: "circle", beat:"16n"}
        
    })

    const handleKeyDown = useCallback(({key}) => playKey(key), [])

    useEffect(() => {
        if(isMusicOn) {
            document.addEventListener('keydown', handleKeyDown)
        } 
        else {
            document.removeEventListener('keydown', handleKeyDown)
        }
    }, [isMusicOn])

    const synth = new Tone.Synth().toDestination();

    const playKey = function(key) {
        if (!Object.keys(keyMap).includes(key) || !isMusicOn) return;
        if (isMusicOn){
            const { note, beat } = keyMap[key]
            synth.triggerAttackRelease(note, beat)
            setLastKey(key)
            setTimeout(() => setLastKey(""), 250)
        }
    }

    useEffect(() => {
        if(!isPlayingSong && lastKey.length === 1 ){ 
            setSong([...song, lastKey]);
        }
    }, [lastKey])

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
            replaySong(song, placeInSong)
        } else if (!playState) {
            clearTimeout(lastTimeout)
        } else if (playState) {
            setIsPlayingSong(true) 
            replaySong(song)
        } 
    }, [playState])

    const addFormSong = (formSong) => {
        const newSong = {songData: song}
        const newMusicItem = {...formSong, songData:song}
        addPlaylist(newMusicItem)
        setCurrentSong(newSong.songData)
        setSong([])
    }

    const handlePauseResumeClick = (evt) => {
        setPlayState((!isPlayingSong || !playState))
    } 

    const replaySavedSong = (data) => {
        replaySong(data, 0, 350)
    }

    const handleSwitchMode = () => {
        isPlayMode ? setIsPlayMode(false) : setIsPlayMode(true)
    }

    const handleSaveForm = () => {
        isShowingForm ? setIsShowingForm(false) : setIsShowingForm(true)
        isMusicOn ? setIsMusicOn(false) : setIsMusicOn(true)
    }

    const handleDeleteNote = () => {
        if (song.length > 1){
            const newSong = song.pop()
            setSong(newSong)
        }
    }

    const songText = () => {
        setText(song.join(""))
    }

    const Mode = () => {
        if (isPlayMode) {
          return (
            <>
            <Instrument pads={keyMap} onKeyClick={playKey} lastKey={lastKey} />
            <button onClick={handlePauseResumeClick}>{(playState && isPlayingSong) ? "Pause" : "Play"}</button>
            <p>Text: {text}</p>
            <button onClick={handleDeleteNote}>Delete last note</button>
            <button onClick={handleSaveForm}>ADD COMMENTS AND SAVE</button>
            </>
          )
        }
        return  <UserPlaylist playlist={playlist}  onDeleteSubmit={onDeleteSubmit} onReplaySaveSong={(data)=>replaySavedSong(data)} ></UserPlaylist>
      };
    
    const FormMode = () => {
        if (isShowingForm) {
            return (
                 <SongForm onFormSubmit= {(songForm) => addFormSong(songForm)}></SongForm>
            )
        }
        return null;
    }

    return(
        <>
            <Visual lastKey={lastKey} pads={keyMap} />     
            <Mode></Mode>
            <button className="buttons" onClick={handleSwitchMode}>{isPlayMode ? "Show your playlist" : "Show keyboard"} </button> 
            <FormMode></FormMode>
        </>
    )
}

export default Play
