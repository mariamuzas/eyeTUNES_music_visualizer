import Song from './Song'

const UserPlaylist = ({playlist,  onDeleteSubmit, onReplaySaveSong}) => {

    const songlist = playlist.map(song => {
        return(
            <Song title={song.title} key={song._id} id={song._id} comment={song.comment} data= {song.songData} onDeleteSubmit={onDeleteSubmit} onReplaySaveSong = {onReplaySaveSong} >
            </Song>
        )
    }) 

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