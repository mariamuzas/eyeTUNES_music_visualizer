import SongService from '../services/SongService.js'
import React from 'react'


const Song = ({title, comment, id, onDeleteSubmit, data, onReplaySaveSong}) => {

    const handleDelete = () => {
        onDeleteSubmit(id)
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