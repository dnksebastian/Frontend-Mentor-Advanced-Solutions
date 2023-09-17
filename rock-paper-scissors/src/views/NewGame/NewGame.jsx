import Basic from "../Basic/Basic";
import Bonus from "../Bonus/Bonus";



const NewGame = ({ isBasicMode, setGameScore, gameIsOn, setGameIsOn, playerSelection, setPlayerSelection, computerSelection, setComputerSelection, resetToNewGame }) => {
    return (
        <>
        {isBasicMode ?
        <Basic setGameScore={setGameScore} gameIsOn={gameIsOn} setGameIsOn={setGameIsOn} playerSelection={playerSelection} setPlayerSelection={setPlayerSelection} computerSelection={computerSelection} setComputerSelection={setComputerSelection} resetToNewGame={resetToNewGame} />
        :
        <Bonus setGameScore={setGameScore} gameIsOn={gameIsOn} setGameIsOn={setGameIsOn} playerSelection={playerSelection} setPlayerSelection={setPlayerSelection} computerSelection={computerSelection} setComputerSelection={setComputerSelection} resetToNewGame={resetToNewGame} />
    }
        </>
    );
};


export default NewGame