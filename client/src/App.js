import { useEffect, useState } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import Play from './containers/Play.js';
import Navbar from './components/Navbar/Navbar.js';
import About from './components/About.js';
import Footer from './components/Footer/Footer.js';
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
    SongService.deleteSong(id)
      .then(fetchSongs)
  }
  
  useEffect(() => {
    fetchSongs();
  }, [])
  
  
  if (!loaded) {
    return <p>Loading...</p>
  }

  return (
      <Router>
        <>
          <Navbar/>
          <Switch>
            <Route exact path="/" render={() => <Play playlist={playlist} addPlaylist={(musicItem) => addMusicItem(musicItem)}  onDeleteSubmit={deleteById}/>} />
            <Route path="/about" component={About}/>
          </Switch>
          <Footer />
        </>
      </Router>
  );
}
  
export default App;
  