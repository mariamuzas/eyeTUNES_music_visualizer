import Song from './Song'
import React from 'react'

const UserPlaylist = ({playlist,  onDeleteSubmit, onReplaySaveSong, loaded}) => {

    console.log(playlist)
    
    const songlist = playlist.map(song => {
            return(
            <Song title={song.title} key={song._id} id={song._id} comment={song.comment} data= {song.songData} onDeleteSubmit={onDeleteSubmit} onReplaySaveSong = {onReplaySaveSong} >
            </Song>
        )
    })


    return (
        <>
            <ul className="song-list">
                {songlist}
            </ul>
        </>
    )

    
}

export default UserPlaylist;