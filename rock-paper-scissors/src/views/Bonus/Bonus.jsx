import './bonus.css'
import * as GameFunctions from '../../utils/gameFunctions';


import Selection from '../../components/Selection/Selection'

const Bonus = ({ setGameIsOn, setPlayerSelection, setComputerSelection }) => {

    const handleSelectionClick = (option) => {
        const computerOption = GameFunctions.pickRandomBonusOption()
        setComputerSelection(computerOption);
        setPlayerSelection(option);
        setGameIsOn(true);
    };

    return (
        <main className="bonus-view-wrapper">
             <div className="game-selections-wrapper-bonus">
                <Selection type='bonus' option='paper' handleClick={() => handleSelectionClick('paper')}/>
                <Selection type='bonus' option='scissors' handleClick={() => handleSelectionClick('scissors')}/>
                <Selection type='bonus' option='rock' handleClick={() => handleSelectionClick('rock')}/>
                <Selection type='bonus' option='lizard' handleClick={() => handleSelectionClick('lizard')}/>
                <Selection type='bonus' option='spock' handleClick={() => handleSelectionClick('spock')}/>
            </div>
        </main>
    );
};

export default Bonus

