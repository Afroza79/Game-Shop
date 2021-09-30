import React from 'react';
import './style.css';
import Game from './component/Game';


const App = () => {
  return (
    <>
      <div className="header">
        <h1>Game <span>Shop.</span></h1>
        <p>You have $200 USD limit for your game shopping</p>
      </div>
      <Game />
      
    </>
  )
}

export default App;

