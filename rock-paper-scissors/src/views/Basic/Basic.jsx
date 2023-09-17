import './basic.css';
import * as GameFunctions from '../../utils/gameFunctions';

import Selection from '../../components/Selection/Selection';

const Basic = ({ setGameIsOn, setPlayerSelection, setComputerSelection }) => {
    
    const handleSelectionClick = (option) => {
        const computerOption = GameFunctions.pickRandomBasicOption()
        setComputerSelection(computerOption)
        setPlayerSelection(option);
        setGameIsOn(true);
    };

    return (
        <main className='basic-view-wrapper'>
            <div className="game-selections-wrapper">
                <Selection type='basic' option='paper' handleClick={() => handleSelectionClick('paper')} />
                <Selection type='basic' option='scissors' handleClick={() => handleSelectionClick('scissors')} />
                <Selection type='basic' option='rock' handleClick={() => handleSelectionClick('rock')} />
            </div>
        </main>
    );
};

export default Basic