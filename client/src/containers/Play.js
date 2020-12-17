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

    const songText = () => {
        return song.join("")
    }

    const Mode = () => {
        if (isPlayMode) {
          return (
            <>
            <Instrument pads={keyMap} onKeyClick={playKey} lastKey={lastKey} />
            <button onClick={handlePauseResumeClick}>{(playState && isPlayingSong) ? "Pause" : "Play"}</button>
            <p>Text: {songText()}</p>
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
            <button onClick={handleSwitchMode}>{isPlayMode ? "Show your playlist" : "Show keyboard"} </button>          
            <Mode></Mode>
            <FormMode></FormMode>
        </>
    )
}

export default Play
