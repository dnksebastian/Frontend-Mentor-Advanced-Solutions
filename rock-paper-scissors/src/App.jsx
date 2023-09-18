import { useEffect, useState } from 'react'
import useLocalStorage from "use-local-storage";
import { createPortal } from 'react-dom';
import './App.css'

import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import RulesModal from './components/RulesModal/RulesModal'

import Results from './views/Results/Results'
import NewGame from './views/NewGame/NewGame';

function App() {
  const [showModal, setShowModal] = useState(false);
  const [isBasicMode, setIsBasicMode] = useState(true);
  const [gameScore, setGameScore] = useState(0);
  const [gameIsOn, setGameIsOn] = useState(false);
  const [playerSelection, setPlayerSelection] = useState('');
  const [computerSelection, setComputerSelection] = useState('');
  const [savedScore, setSavedScore] = useLocalStorage('gamescore', 0);

  console.log('rendered');


  const resetToNewGame = () => {
    setGameIsOn(false)
    setPlayerSelection('')
    setComputerSelection('')
  }

  const clearScore = () => {
    setGameScore(0)
    setSavedScore(0)
  };


  useEffect(() => {
    if(savedScore) {
      setGameScore(savedScore)
    }
  }, [savedScore])


  useEffect(() => {
    setSavedScore(gameScore)

  }, [gameScore, savedScore, setSavedScore]);




  return (
    <div className='main-wrapper'>
    <Header
    isBasicMode={isBasicMode}
    gameScore={gameScore} />

    {!gameIsOn ?
    <NewGame
    isBasicMode={isBasicMode}
    setGameIsOn={setGameIsOn}
    setPlayerSelection={setPlayerSelection}
    setComputerSelection={setComputerSelection}
    />
    :
    <Results
    playerSelection={playerSelection}
    computerSelection={computerSelection}
    isBasicMode={isBasicMode}
    setGameScore={setGameScore}
    resetToNewGame={resetToNewGame}
    />
    }

    <Footer
    isBasicMode={isBasicMode}
    setIsBasicMode={setIsBasicMode}
    setShowModal={setShowModal}
    gameIsOn={gameIsOn}
    clearScore={clearScore}
    />

    {showModal && createPortal(
      <RulesModal
      isBasicMode={isBasicMode}
      onClose={() => setShowModal(false)} />, document.getElementById('root')
    )}
    </div>
  )
}

export default App
