// 1. Deposit some money
// 2. Determine number of lines to bet on
// 3. Collect a bet amount
// 4. Spin the slot machine
// 5. check if the user won anything.
// 6. Give the user their winnings.
// 7. Play again/no money left.


const prompt = require("prompt-sync")();

const deposit = () => {
    while (true) {
        const depositAmount = prompt("Enter a deposit amount: ");
        const numberDepositAmount = parseFloat(depositAmount);

        if (isNaN(numberDepositAmount) || numberDepositAmount <= 0) {
            console.log("Invalid deposit amount, try again. ")
        } else {
            return numberDepositAmount;
        }
    }


};


const getNumberOfLines = () => {
    while (true) {
        const lines = prompt("Enter the number of lines to bet on (1-3): ");
        const getNumberOfLines = parseFloat(lines);

        if (isNaN(getNumberOfLines) || getNumberOfLines <= 0 || getNumberOfLines > 3) {
            console.log("Invalid number of lines, try again. ")
        } else {
            return getNumberOfLines;
        }
    }
}

const depositAmount = deposit();










