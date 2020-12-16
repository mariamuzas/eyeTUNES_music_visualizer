import Song from './Song'
import React from 'react'

const UserPlaylist = ({playlist,  onDeleteSubmit, onReplaySaveSong, loaded}) => {

    console.log(playlist)

    // if (!loaded) {
    //     return <p>Loading...</p>
    //   }
    
    const songlist = playlist.map(song => {
            return(
            <Song title={song.title} key={song._id} id={song._id} comment={song.comment} data= {song.songData} onDeleteSubmit={onDeleteSubmit} onReplaySaveSong = {onReplaySaveSong} >
            </Song>
        )
        }
    )


    return (
        <>
            <p>this is the playlist</p>
            <ul>
                {songlist}
            </ul>
        </>
    )

    
}

export default UserPlaylist;