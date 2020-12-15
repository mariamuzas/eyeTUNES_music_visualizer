import { useEffect, useState } from 'react';
import './App.css';
import Play from './containers/Play.js';
import SongService from './services/SongService';

function App() {

  const [playlist, setPlaylist] = useState([]);

  const fetchSongs = () => {
    console.log("getting songs info");
    SongService.getSongs()
        .then(data => setPlaylist(data))
}

useEffect(() => {
  fetchSongs();
}, [])

  return (
    <>
      <Play playlist={playlist} />
    </>
  );
}

export default App;
