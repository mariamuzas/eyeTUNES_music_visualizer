import Song from './Song'

const UserPlaylist = ({playlist,  onDeleteSubmit3}) => {

    const onDeleteSubmit2 = (id) => {
        onDeleteSubmit3(id);
}
    
    const songlist = playlist.map(song => {
        return(
            <Song title={song.title} key={song._id} id={song._id} comment={song.comment} onDeleteSubmit1={(id) => onDeleteSubmit2(id)} >
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