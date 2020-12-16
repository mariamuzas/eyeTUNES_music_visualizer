import Song from './Song'

const UserPlaylist = ({playlist}) => {

    const songlist = playlist.map(song => {
        return(
            <Song title={song.title} key={song.id} comment={song.comment}></Song>
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