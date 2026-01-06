let board;

let player0SeedCount;
let player1SeedCount;

const player0BoardSide = [0,1,2,3,4,5];
const player1BoardSide = [6,7,8,9,10,11];

const playTheGame = () => {
    //Choose first player randomly
    let currentPlayer = Math.random() >= 50 ? 1 : 0;
    initializeBoard;
    //Start gameplay loop
    while(!isGameOver) {
        //Board Display Function
        let holeNumberToPlayFrom = prompt("Quel trou pour jouer le coup ?");
        if(checkStarvation(currentPlayer)) {
            if(isThereAPlayableMove(currentPlayer)){
                break;
            }
            while(!checkPlayable(holeNumberToPlayFrom)) {
                holeNumberToPlayFrom = prompt("Votre adversaire doit recevoir des graines pour jouer le prochain coup. Veuillez recommencer");
            }
        }
        makeAPlay(holeNumberToPlayFrom);
        currentPlayer += 1 % 2;
    }
    emptyBoard;
}

const initializeBoard = () => {
    board = [4,4,4,4,4,4,4,4,4,4,4,4];
    player0SeedCount = 0;
    player1SeedCount = 0;
}

const makeAPlay = (holeNumber) => {
    let numberOfSeedsInHole = board[holeNumber];
    let holeNumberToFill;
    board[holeNumber] = 0;
    while (numberOfSeedsInHole > 0) {
        holeNumberToFill = holeNumber + 1 % 12;
        board[holeNumberToFill] += numberOfSeedsInHole;
        numberOfSeedsInHole--;
    }
    countPoints(holeNumberToFill);
}

const countPoints = (lastHoleNumber) => {
    let lastHoleToCheck;
    let currentPlayer;
    const player1BoardSide = [0,1,2,3,4,5];
    if(player1BoardSide.includes(lastHoleNumber)) {
        lastHoleToCheck = 0;
        currentPlayer = 1;
    } else {
        lastHoleToCheck = 6;
        currentPlayer = 0;
    }

    let currentHoleToCheck = lastHoleNumber

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
        board[currentHoleToCheck] = 0
        currentHoleToCheck--;
    }
}

const checkStarvation = (currentPlayer) => {
    if (currentPlayer = 0) {
        for(i=6; i < 12; i++) {
            if (board[i] != 0)
                return false;
        }
        return true;
    } else {
        for(i=0; i < 6; i++) {
            if (board[i] != 0)
                return false;
        }
        return true;
    }
}

const checkPlayable = (holeNumber) => {
    numberOfSeeds = board[holeNumber];
    return numberOfSeeds >= 6 - holeNumber % 6;
}

const isGameOver = () => {
    return player0SeedCount > 24 || player1SeedCount > 24;
}

const isThereAPlayableMove = (currentPlayer) => {
    const playerBoardSide = currentPlayer == 0 ? player0BoardSide : player1BoardSide;
    for (hole of playerBoardSide) {
        if (checkPlayable(hole)) {
            return true;
        }
    }
    return false;
}

const emptyBoard = () => {
    for(hole of player0BoardSide) {
        player0SeedCount += board[hole];
        board[hole] = 0;
    }
    for(hole of player1BoardSide) {
        player1SeedCount += board[hole];
        board[hole] = 0;
    }
}