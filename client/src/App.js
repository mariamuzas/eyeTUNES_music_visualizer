import { useEffect, useState } from 'react';
import './App.css';
import Play from './containers/Play.js';
import SongService from './services/SongService';
import UserPlaylist from './components/UserPlaylist.js'

function App() {

  const [playlist, setPlaylist] = useState([]);
  const [loaded, setLoaded] = useState(false);

  const fetchSongs = () => {
    console.log("getting songs info");
    SongService.getSongs()
        .then(data => setPlaylist(data))
        .then(() => setLoaded(true))
}

const addMusicItem = (musicItem) =>{
  SongService.postSong(musicItem)
  .then(setPlaylist([...playlist, musicItem]));
}

useEffect(() => {
  fetchSongs();
}, [])


if (!loaded) {
  return <p>Loading...</p>
}
  return (
    <>
      <Play playlist={playlist} addPlaylist={(musicItem) => addMusicItem(musicItem)}/>
      <UserPlaylist playlist={playlist}></UserPlaylist>
    </>
  );
}

export default App;
