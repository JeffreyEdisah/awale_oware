let board = [4,4,4,4,4,4,4,4,4,4,4,4];

let player0SeedCount = 0;
let player1SeedCount = 0;

const makeAPlay = (holeNumber) => {
    let numberOfSeedsInHole = board[holeNumber];
    let holeNumberToFill;
    board[holeNumber] = 0;
    while (numberOfSeedsInHole > 0) {
        holeNumberToFill = holeNumber + 1 % 12;
        board[holeNumberToFill] += numberOfSeedsInHole;
        numberOfSeedsInHole--;
    }
    CountPoints(holeNumberToFill);
}

const CountPoints = (lastHoleNumber) => {
    let lastHoleToCheck;
    let currentPlayer;
    const player1BoardSide = [0,1,2,3,4,5]
    if(player1BoardSide.includes(lastHoleNumber)) {
        lastHoleToCheck = 0;
        currentPlayer = 1;
    } else {
        lastHoleToCheck = 6;
        currentPlayer = 0;
    }

    let currentHoleToCheck = lastHoleNumber;

    while(currentHoleToCheck >= lastHoleToCheck){
        currentHoleCount = board[currentHoleToCheck];
        if (currentHoleCount > 3 || currentHoleCount < 2) {
            break;
        }
        if (currentPlayer === 0){
            player0SeedCount += currentHoleCount;
        } else {
            player1SeedCount += currentHoleCount;
        }
        board[currentHoleToCheck] = 0;
        currentHoleToCheck--;
    }
}

const checkStarvation = (currentPlayer) => {
    if (currentPlayer = 0) {
        for(i=6; i < 12; i++) {
            if (board[i] != 0)
                return false
        }
        return true;
    } else {
        for(i=0; i < 6; i++) {
            if (board[i] != 0)
                return false
        }
        return true;
    }
}

const checkPlayableCondition = (currentPlayer) => {
    
}