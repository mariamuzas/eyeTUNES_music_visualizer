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
  
  const addMusicItem = (musicItem) =>{
    SongService.postSong(musicItem)
    .then(setPlaylist([...playlist, musicItem]));
  }
  
  const deleteById = (id) => {
    console.log("Delete by ID speaking")
    console.log(id)
    SongService.deleteSong(id)
      .then(fetchSongs)
  }
  
  useEffect(() => {
    fetchSongs();
  }, [])
  
  // SightingService.deleteSighting(id)
  // .then(() => {
  //   const index = this.sightings.findIndex(sighting => sighting._id === id);
  //   this.sightings.splice(index, 1);
  // });
  
  if (!loaded) {
    return <p>Loading...</p>
  }

  return (
    <>
      <Play playlist={playlist} addPlaylist={(musicItem) => addMusicItem(musicItem)}  onDeleteSubmit={deleteById}/>
    </>
  );
}
  
export default App;
  