import * as Tone from 'tone';
import {StartAudioContext} from 'startaudiocontext';
import {useEffect} from 'react'


const Key = ({individualKey}) => {

    // useEffect (() => {
    //     var context = new AudioContext();
    //     StartAudioContext(context)
    // }, [])
    

    const synth = new Tone.Synth().toDestination()

    const play = () => {synth.triggerAttackRelease(individualKey.note, individualKey.beat)}

    const handleKeyDown = (event) => {
        if (event.key === individualKey.keyPress) {
            play()
        }
    }

     return (
         <>
        {/* <p onKeyDown= {handleKeyDown}>a</p> */}
          <input type="text" onKeyDown= {handleKeyDown}></input> 
         </>
     )
}

export default Key