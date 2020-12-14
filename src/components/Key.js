import * as Tone from 'tone';


const Key = ({individualKey, onKeyClick}) => {

     return (
         <>
            <li>{individualKey.keyPress}</li>
         </>
     )
}

export default Key