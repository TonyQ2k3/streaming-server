import React from 'react';
import videojs from 'video.js';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

// This imports the functional component from the previous sample.
import VideoJS from './components/VideoJS'
import NavBar from './components/NavBar';

// Import pages
import VodPlayer from './pages/VodPlayer';
import VodMain from './pages/VodMain';

const App = () => {


  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/vod">
          <VodMain />
        </Route>
        <Route exact path="/vod/:id">
          <VodPlayer />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
