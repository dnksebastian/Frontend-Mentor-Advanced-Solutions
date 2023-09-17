export const calculateResult = (playerOption, computerOption, gameMode) => {
    let options

    const modulo = (a, b) => {
        const res = a % b
        return (res < 0) ? res + b : res
    }

    if (gameMode === 'basic') {
        options = ['rock', 'paper', 'scissors']
    } else if (gameMode === 'bonus') {
        options = ['rock', 'spock', 'paper', 'lizard', 'scissors']
    }


    const calculate = (playerChoice, computerChoice) => {
        const a = options.indexOf(playerChoice);
        const b = options.indexOf(computerChoice);

        if (a === b) {
            return 'tie';
        } else if (modulo((a - b), options.length) < options.length / 2) {
            return playerChoice
        }
        else {
            return computerChoice
        }
    };

    return calculate(playerOption, computerOption);

};

const pickRandomArrayElement = (arr) => {
    const randomEl = arr[(Math.random() * arr.length) | 0 ]
    return randomEl
};


export const pickRandomBasicOption = () => {
    const basicOptions = ['rock', 'paper', 'scissors']
    return pickRandomArrayElement(basicOptions);
};

export const pickRandomBonusOption = () => {
    const bonusOptions = ['rock', 'paper', 'scissors', 'lizard', 'spock']
    return pickRandomArrayElement(bonusOptions);
};