import Song from './Song'

const UserPlaylist = ({playlist,  onDeleteSubmit3, onReplaySaveSong2}) => {

    const onDeleteSubmit2 = (id) => {
        onDeleteSubmit3(id);
}
    const onReplaySaveSong1 = (data) => {
        onReplaySaveSong2(data)
    }


    const songlist = playlist.map(song => {
        return(
            <Song title={song.title} key={song._id} id={song._id} comment={song.comment} data= {song.songData} onDeleteSubmit1={(id) => onDeleteSubmit2(id)} onReplaySaveSong ={(data) => onReplaySaveSong1(data) } >
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