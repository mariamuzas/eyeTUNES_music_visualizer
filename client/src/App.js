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

let test = null

if (playlist.length) {
  test = <p>{playlist[0].title}</p>
}

  return (
    <p>
      <Play playlist={playlist} />
      {test}
    </p>
  );
}

export default App;
