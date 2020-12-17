import React from 'react'
import image1 from '../images/Thumbnail1.png'


const Song = ({title, comment, id, onDeleteSubmit, data, onReplaySaveSong}) => {

    const handleDelete = () => {
        onDeleteSubmit(id)
    }

    const handleReplay= () => {
        onReplaySaveSong(data)
    }
 

    return (
        <li>
            <img src={image1}></img>
            <p>{title.toUpperCase()}</p>
            <p>{comment}</p>
            <button className="buttons" onClick={handleDelete}>DELETE SONG</button>
            <button className="buttons" onClick={handleReplay}>PLAY</button>
        </li>
    )
}

export default Song;