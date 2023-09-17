import { useState } from 'react'
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
  const [resultsStep, setResultsStep] = useState(0);


  const resetToNewGame = () => {
    setGameIsOn(false)
    setPlayerSelection('')
    setComputerSelection('')
    setResultsStep(0);
  }


  return (
    <div className='main-wrapper'>
    <Header
    isBasicMode={isBasicMode}
    gameScore={gameScore} />

    {!gameIsOn ?
    <NewGame
    isBasicMode={isBasicMode}
    setGameScore={setGameScore}
    gameIsOn={gameIsOn}
    setGameIsOn={setGameIsOn}
    playerSelection={playerSelection} setPlayerSelection={setPlayerSelection}computerSelection={computerSelection} setComputerSelection={setComputerSelection}resetToNewGame={resetToNewGame} />
    :
    <Results
    playerSelection={playerSelection}
    computerSelection={computerSelection}
    isBasicMode={isBasicMode}
    setGameScore={setGameScore}
    resetToNewGame={resetToNewGame}
    resultsStep={resultsStep}
    setResultsStep={setResultsStep}
    />
    }

    <Footer
    isBasicMode={isBasicMode}
    setIsBasicMode={setIsBasicMode}
    setShowModal={setShowModal}
    gameIsOn={gameIsOn}
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
