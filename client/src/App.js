import { useEffect, useState } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import Play from './containers/Play.js';
import Navbar from './components/Navbar.js';
import About from './components/About.js';
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
    
      <Router>
        <>
          <Navbar/>
          <Switch>
            <Route exact path="/" component={Play} render={() => <Play playlist={playlist}/> }/>
            <Route path="/about" component={About}/>
            {/* <Route path="/user" component={Contact}/> */}
          </Switch>
        </>
      </Router>
    
  );
}

export default App;
