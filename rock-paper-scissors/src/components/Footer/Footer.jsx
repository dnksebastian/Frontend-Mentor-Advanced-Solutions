import './footer.css'

const Footer = ({ setShowModal, isBasicMode, setIsBasicMode, gameIsOn }) => {

    const handleGameModeChange = () => {
        setIsBasicMode(!isBasicMode)
    }

    return (
        <footer>
            <div className='controls'>
                {!gameIsOn && <div className='game-mode-helper'>
                <span className='toggle-desc'>Choose game mode:</span>
                <label className='game-mode-toggle-switch'>
                    <span className='game-mode-info'>
                        { isBasicMode ? 'Basic mode' : 'Bonus mode'}
                    </span>
                    <input checked={!isBasicMode} onChange={handleGameModeChange} type="checkbox" />
                    <span className='slider round'></span>
                </label>
                </div>}
                <button className='ft-btn' onClick={() => setShowModal(true)}>rules</button>
            </div>
            <p id='attribution'>Challenge by <a href="https://www.frontendmentor.io?ref=challenge">Frontend Mentor</a>. Coded by <a href="#/">Sebastian</a>.</p>
        </footer>
    )
};

export default Footer