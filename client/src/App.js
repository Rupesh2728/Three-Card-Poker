import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import BrowserRouter

import Intro from './Components/Intro';
import PlayersFormationPage from './Components/PlayersFormationPage';
import Game from './Components/Game';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path="/" Component={Intro} />
          <Route exact path="/takeplayers" Component={PlayersFormationPage} />
          <Route exact path="/game" Component={Game} />
        </Routes>     
      </div>
    </Router>
  );
}

export default App;
