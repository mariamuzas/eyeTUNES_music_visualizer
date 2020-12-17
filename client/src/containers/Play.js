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
        "q": {keyPress: "q", note: "B3", color: "DFFF00", shape: "circle", beat:"8n"},
        "w": {keyPress: "w", note: "C#4", color: "DE3163", shape: "circle", beat:"8n"},
        "e": {keyPress: "e", note: "D#4", color: "6495ED", shape: "circle", beat:"8n"},
        "r": {keyPress: "r", note: "D#4", color: "800080", shape: "circle", beat:"8n"},
        "t": {keyPress: "t", note: "F#4", color: "6EEB83", shape: "circle", beat:"8n"},
        "y": {keyPress: "y", note: "G#4", color: "C8A2C8", shape: "circle", beat:"8n"},
        "u": {keyPress: "u", note: "B4", color: "40E0D0", shape: "circle", beat:"8n"},
        "i": {keyPress: "i", note: "B4", color: "FCBA04", shape: "circle", beat:"8n"},
        "o": {keyPress: "o", note: "C#5", color: "2479FC", shape: "circle", beat:"8n"},
        "p": {keyPress: "p", note: "D#5", color: "00FA9A", shape: "circle", beat:"8n"},
        
        "a": {keyPress: "a", note: "C4", color: "FC2424", shape: "circle", beat:"8n"},
        "s": {keyPress: "s", note: "D4", color: "96F550", shape: "circle", beat:"8n"},
        "d": {keyPress: "d", note: "E4", color: "FF8C42", shape: "circle", beat:"8n"},
        "f": {keyPress: "f", note: "F4", color: "E4FF1A", shape: "circle", beat:"8n"},
        "g": {keyPress: "g", note: "G4", color: "6EEB83", shape: "circle", beat:"8n"},
        "h": {keyPress: "h", note: "A4", color: "CCCCFF", shape: "circle", beat:"8n"},
        "j": {keyPress: "j", note: "B4", color: "6AB547", shape: "circle", beat:"8n"},
        "k": {keyPress: "k", note: "C5", color: "EC058E", shape: "circle", beat:"8n"},
        "l": {keyPress: "l", note: "D5", color: "4D9DE0", shape: "circle", beat:"8n"},
        "'": {keyPress: "Apostrophe", note: "E5", color: "F9627D", shape: "circle", beat:"8n"},
        
        "z": {keyPress: "z", note: "C3", color: "F17021", shape: "circle", beat:"8n"},
        "x": {keyPress: "x", note: "D3", color: "EBF121", shape: "circle", beat:"8n"},
        "c": {keyPress: "c", note: "E3", color: "90FCDA", shape: "circle", beat:"8n"},
        "v": {keyPress: "v", note: "F3", color: "A6B1E1", shape: "circle", beat:"8n"},
        "b": {keyPress: "b", note: "G3", color: "FF6F59", shape: "circle", beat:"8n"},
        "n": {keyPress: "n", note: "A3", color: "4C6085", shape: "circle", beat:"8n"},
        "m": {keyPress: "m", note: "B3", color: "F662E9", shape: "circle", beat:"8n"},
        ",": {keyPress: "Comma", note: "C3", color: "90DDFC", shape: "circle", beat:"8n"},
        ".": {keyPress: "Full Stop", note: "C4", color: "A50104", shape: "circle", beat:"8n"},
        " ": {keyPress: "Space", note: "C4", color: "000000", shape: "circle", beat:"16n"}
        
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
        song.splice(-1, 1)
        setText(song)
    }

    const songText = () => {
        return song.join("")
    }

    const Mode = () => {
        if (isPlayMode) {
          return (
            <aside class="mode-container">
                <Instrument pads={keyMap} onKeyClick={playKey} lastKey={lastKey} />
                <p>YOUR LAST PLAYED NOTES: {songText()}</p>
                <div>
                    <button className="buttons" onClick={handlePauseResumeClick}>{(playState && isPlayingSong) ? "PAUSE  YOUR SONG" : "PLAY BACK YOUR SONG"}</button>
                    <button className="buttons" onClick={handleDeleteNote}>DELETE YOUR LAST NOTE</button>
                    <button className="buttons" onClick={handleSaveForm}>SAVE YOUR ARTWORK</button>
                </div>
            </aside>
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
            <FormMode></FormMode>
            <section className="show-your-playlist">
                <button className="buttons" onClick={handleSwitchMode}>{isPlayMode ? "SHOW YOUR PLAYLIST" : "SHOW YOUR KEYBOARD"} </button>
            </section>
        </>
    )
}

export default Play
