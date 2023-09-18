import Basic from "../Basic/Basic";
import Bonus from "../Bonus/Bonus";

const NewGame = ({ isBasicMode, setGameIsOn, setPlayerSelection, setComputerSelection }) => {
    return (
        <>
        {isBasicMode ?
        <Basic
        setGameIsOn={setGameIsOn}
        setPlayerSelection={setPlayerSelection}
        setComputerSelection={setComputerSelection}
        />
        :
        <Bonus
        setGameIsOn={setGameIsOn}
        setPlayerSelection={setPlayerSelection}
        setComputerSelection={setComputerSelection}
        />
    }
        </>
    );
};


export default NewGame