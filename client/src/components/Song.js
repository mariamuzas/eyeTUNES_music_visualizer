import SongService from '../services/SongService.js'

const Song = ({title, comment, id, onDeleteSubmit1}) => {

    const handleDelete = () => {
        onDeleteSubmit1(id)
    }
 

    return (
        <li>
            <p>Thumbnail</p>
            <p>{title}</p>
            <p>{comment}</p>
            <button onClick={handleDelete}>Delete song</button>
            <button>Play</button>
        </li>
    )
}

export default Song;