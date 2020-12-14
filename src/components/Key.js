import * as Tone from 'tone';


const Key = ({individualPad, onKeyClick}) => {

     return (
         <>
            <li>{individualPad.keyPress}</li>
         </>
     )
}

export default Key