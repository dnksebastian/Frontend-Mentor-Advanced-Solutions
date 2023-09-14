import { useState } from 'react'
import { createPortal } from 'react-dom';
import './App.css'

import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import RulesModal from './components/RulesModal/RulesModal'

function App() {
  const [showModal, setShowModal] = useState(false);
  const [isBasicMode, setIsBasicMode] = useState(true);


  return (
    <div className='main-wrapper'>
    <Header isBasicMode={isBasicMode}></Header>
    <div>

    You Picked
    The House Picked

    You Win
    You Lose

    Play Again
    </div>

    <Footer isBasicMode={isBasicMode} setIsBasicMode={setIsBasicMode} setShowModal={setShowModal} ></Footer>
    {showModal && createPortal(
      <RulesModal isBasicMode={isBasicMode} onClose={() => setShowModal(false)} />, document.getElementById('root')
    )}
    </div>
  )
}

export default App
