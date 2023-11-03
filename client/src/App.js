import React, {useState} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import Intro from './Components/Intro';
import PlayersFormationPage from './Components/PlayersFormationPage';
import Game from './Components/Game';
import Owner from './Components/Owner';


function App() {
  const [state,setstate]=useState({
    provider:null,
    signer:null,
    contract:null,
  });

  const owner="0x2EacED435a4725d7cf5d48758796fb111981256F";

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
          <Route exact path="/"  element={<Intro setstateHandler={setstateHandler} setAccountHandler={setAccountHandler} owner={owner}/>} />
          <Route exact path="/takeplayers" element={<PlayersFormationPage state={state} account={acc}/>}/>
          <Route exact path="/game" element={<Game state={state} account={acc}/>}/>
          <Route exact path="/owner" element={<Owner state={state}/>}/>
        </Routes>     
      </div>
    </Router>
  );
}

export default App;
