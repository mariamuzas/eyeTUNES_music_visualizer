import Key from '../components/Key.js'
import SongInput from '../components/SongInput.js'
const Instrument = ({keys}) => {
  
    const keyBoard = keys.map((key, i) => {
        return (<Key index= {i} key ={key}> </Key>)
    }) 
    return(
        <>
        <h2>this is the Instrument container</h2>
        <ul>
            {keyBoard}
        </ul>
        <SongInput />
        </>
    )
}

export default Instrument;