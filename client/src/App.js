import { useEffect, useState } from 'react';
import './App.css';
import Play from './containers/Play.js';
import SongService from './services/SongService';

function App() {

  const [playlist, setPlaylist] = useState([]);
  const [loaded, setLoaded] = useState(false);

  const fetchSongs = () => {
    console.log("getting songs info");
    SongService.getSongs()
        .then(data => setPlaylist(data))
        .then(() => setLoaded(true))
}

useEffect(() => {
  fetchSongs();
}, [])


if (!loaded) {
  return <p>Loading...</p>
}
  return (
    <p>
      <Play playlist={playlist} />
      <p>{playlist[0].title}</p>
    </p>
  );
}

export default App;
