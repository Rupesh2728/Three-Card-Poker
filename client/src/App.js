import React, {useState} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import Intro from './Components/Intro';
import PlayersFormationPage from './Components/PlayersFormationPage';
import Game from './Components/Game';


function App() {
  const [state,setstate]=useState({
    provider:null,
    signer:null,
    contract:null,
  });

  const [acc,setacc]=useState("No Conneted Account");

    function setstateHandler(value)
    { 
        setstate(value);
    }

    function setAccountHandler(value)
    {
      setacc(value);
    }

  return (   
    <Router>
      <div>
        <Routes>
          <Route exact path="/"  element={<Intro setstateHandler={setstateHandler} setAccountHandler={setAccountHandler}/>} />
          <Route exact path="/takeplayers" element={<PlayersFormationPage state={state} account={acc}/>}/>
          <Route exact path="/game" element={<Game state={state} account={acc}/>}/>
        </Routes>     
      </div>
    </Router>
  );
}

export default App;
