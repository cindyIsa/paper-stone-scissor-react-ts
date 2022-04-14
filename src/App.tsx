import React, { Fragment } from 'react';
import './App.scss';
import GameDisplay from './components/gameDIsplayArea/GameDisplay';
import GameHistory from './components/gameHistory/GameHistory';
import GameSelection from './components/gameSelection/GameSelection';

function App() {

  return (
    <div className="game">
      <div className="game-left">
        <div className="game-left-display">
          <GameDisplay />
        </div>
        <div className="game-left-selection"><GameSelection /></div>
      </div>
      <div className="game-right">
        <div className="game-right-history"><GameHistory /></div>
      </div>

    </div>
  );
}

export default App;
