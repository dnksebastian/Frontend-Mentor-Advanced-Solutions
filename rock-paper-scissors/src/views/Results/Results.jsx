import './results.css'
import * as GameFunctions from '../../utils/gameFunctions';

import Selection from '../../components/Selection/Selection';
import { useEffect, useRef, useState } from 'react';

const Results = ({ playerSelection, computerSelection, isBasicMode, resetToNewGame, setGameScore }) => {

    const [showComputerOption, setShowComputerOption] = useState(false);
    const [showFinalResult, setShowFinalResult] = useState(false);

    setTimeout(() => {
        setShowComputerOption(true);
    }, 2000);

    setTimeout(() => {
        setShowFinalResult(true);
    }, 3500);

    let resultToDisplay = useRef();

    useEffect(() => {
        const checkScore = () => {
        
            let newResult
            
            if (isBasicMode) {
                newResult = GameFunctions.calculateResult(playerSelection, computerSelection, 'basic');
        
            } else if (!isBasicMode) {
                newResult = GameFunctions.calculateResult(playerSelection, computerSelection, 'bonus');
            }
    
            if (newResult === playerSelection) {
                setTimeout(() => {
                    setGameScore((prev) => prev + 1)
                }, 2000)
                return 'You win';
            } else if (newResult === computerSelection) {
                setTimeout(() => {
                    setGameScore((prev) => prev - 1)
                }, 2000)
                return 'You lose'
            } else if (newResult === 'tie') {
                return 'Tie'
            }
    
        };

        resultToDisplay.current = checkScore();

    }, [computerSelection, playerSelection, isBasicMode, setGameScore])

    return (
        <div className='results-wrapper results-step3'>
            <div className="results-helper">
            <div className="selection-slot">
                <div className="selection-placeholder">
                    <Selection type='result' option={playerSelection} />
                </div>
                <p className="selection-label">You Picked</p>
            </div>
            <div className="selection-slot">
                <div className="selection-placeholder">
                    {showComputerOption && <Selection type='result' option={computerSelection} />}
                </div>
                <p className="selection-label">The House Picked</p>
            </div>
            </div>
            {showFinalResult &&
            <div className='play-again-box'>
                <p className="result-info">{resultToDisplay.current}</p>
                <button className='result-btn' onClick={resetToNewGame}>Play again</button>
            </div>
            }
    </div>
    );

}

export default Results