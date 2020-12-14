import { Tone } from "tone/build/esm/core/Tone"

const Key = (props) => {
    const synth = new Tone.Synth().toDestination()

    // const play = () => {synth.triggerAttackRelease({note}, "8n")}

    // const handleKeyDown = (event) => {
    //     if (event.key === {prop.key}) {
    //         playC4()
    //     }
    // }

     return (
        
         <>
          <p>{props.note}</p>
         </>
     )
}

export default Key