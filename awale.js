let board = [4,4,4,4,4,4,4,4,4,4,4,4];

let player0SeedCount = 0;
let player1SeedCount = 0;

const makeAPlay = (holeNumber) => {
    let numberOfSeedsInHole = board[holeNumber];
    board[holeNumber] = 0;
    while (numberOfSeedsInHole > 0) {
        holeNumberToFill = holeNumber + 1;
        if (holeNumber === 11){
            holeNumberToFill = 0;
        }
        board[holeNumberToFill] += numberOfSeedsInHole;
        numberOfSeedsInHole--;
    }
}

const checkStarvation = (currentPlayerNumber) => {
    if (currentPlayerNumber = 0) {
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

const checkWinningCondition = () => {
    
}

const checkPlayableCondition = () => {

}