import './results.css'
import * as GameFunctions from '../../utils/gameFunctions';

import Selection from '../../components/Selection/Selection';

const Results = ({ playerSelection, computerSelection, isBasicMode, resetToNewGame, resultsStep, setResultsStep }) => {
    
    const checkScore = () => {
        
        let newResult
        
        if (isBasicMode) {
            newResult = GameFunctions.calculateResult(playerSelection, computerSelection, 'basic');
    
        } else if (!isBasicMode) {
            newResult = GameFunctions.calculateResult(playerSelection, computerSelection, 'bonus');
        }

        if (newResult === playerSelection) {
            return 'You win';
        } else if (newResult === computerSelection) {
            return 'You lose'
        } else if (newResult === 'tie') {
            return 'Tie'
        }

    };

    if (resultsStep === 0) {

        setTimeout(() => {
            setResultsStep(1)
        }, 3000)

        
        return (
            <div className='results-wrapper results-step1'>
                <div className="results-helper">
                <div className="selection-slot">
                    <div className="selection-placeholder">
                        <Selection type='result' option={playerSelection} />
                    </div>
                    <p className="selection-label">You Picked</p>
                </div>
                <div className="selection-slot">
                    <div className="selection-placeholder"></div>
                    <p className="selection-label">The House Picked</p>
                </div>
                </div>
        </div>
        );
    }
    
    if (resultsStep === 1) {

        setTimeout(() => {
            setResultsStep(2)
        }, 3000)

        return (
            <div className='results-wrapper results-step2'>
                <div className="results-helper">
                <div className="selection-slot">
                    <div className="selection-placeholder">
                        <Selection type='result' option={playerSelection} />
                    </div>
                    <p className="selection-label">You Picked</p>
                </div>
                <div className="selection-slot">
                    <div className="selection-placeholder">
                    <Selection type='result' option={computerSelection} />
                    </div>
                    <p className="selection-label">The House Picked</p>
                </div>
                </div>
        </div>
        );
    }
    
    if (resultsStep === 2) {
        const resultToDisplay = checkScore();

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
                    <Selection type='result' option={computerSelection} />
                    </div>
                    <p className="selection-label">The House Picked</p>
                </div>
                </div>
                <div className='play-again-box'>
                    <p className="result-info">{resultToDisplay}</p>
                    <button className='result-btn' onClick={resetToNewGame}>Play again</button>
                </div>
        </div>
        );
    }


    return (
        <div className='results-wrapper'>
            <div className="results-helper">
            <div className="selection-slot">
                <div className="selection-placeholder">
                </div>
                <p className="selection-label">You Picked</p>
            </div>
            <div className="selection-slot">
                <div className="selection-placeholder"></div>
                <p className="selection-label">The House Picked</p>
            </div>
            </div>
    </div>
    );

}

export default Results