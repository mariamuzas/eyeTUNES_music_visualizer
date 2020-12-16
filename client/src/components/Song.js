import SongService from '../services/SongService.js'

const Song = ({title, comment, id, onDeleteSubmit1, data, onReplaySaveSong}) => {

    const handleDelete = () => {
        onDeleteSubmit1(id)
    }

    const handleReplay= () => {
        onReplaySaveSong(data)
    }
 

    return (
        <li>
            <p>Thumbnail</p>
            <p>{title}</p>
            <p>{comment}</p>
            <button onClick={handleDelete}>Delete song</button>
            <button onClick={handleReplay}>Play</button>
        </li>
    )
}

export default Song;