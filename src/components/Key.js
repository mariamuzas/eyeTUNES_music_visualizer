import * as Tone from 'tone';


const Key = ({individualKey}) => {
    const synth = new Tone.Synth().toDestination()

    const play = () => {synth.current.triggerAttackRelease(individualKey.note, individualKey.beat)}

    const handleKeyDown = (event) => {
        StartAudioContext(audioContext)
        if (event.key === individualKey.keyPress) {
            play()
        }
    }

     return (
         <>
        <p onKeyDown= {handleKeyDown}>a</p>
          {/* <input type="text" onKeyDown= {handleKeyDown}></input>  */}
         </>
     )
}

export default Key