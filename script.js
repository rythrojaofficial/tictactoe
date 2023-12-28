// player will be x, or player 1 will be x
// ===================
// factory functions
// ===================
// players module 
const throwError = 'seems to be a problem here cheif'

function createPlayer(name){
    let userName = name;
    let score = 0;
    let marker = 'x';
    let plays = [];

    function getScore(){return score}; 
    function improveScore(){return score++};
    function getPlays(){return plays};
    function addPlays(spot){
        this.plays.push(spot);
        return plays;
    }
    function changeMarker(){
        switch(this.marker){
            case 'x': this.marker = 'o'; break;
            case 'o': this.marker = 'x'; break;
            default: console.log(throwError);
        }
    }
    return {userName, score, marker, plays, getScore, improveScore, getPlays, addPlays, changeMarker}
    
}

const player1 = createPlayer('player1');
const theComputer = createPlayer('theComputer');
        theComputer.changeMarker();
// player1.improveScore();
// player1.improveScore();
// theComputer.improveScore();


// =========
// the game 
// =========

const theGame = (function(){
    let currentGame = {};

    
    function playerRound(){
        let playerChoice = parseInt(prompt('choose a spot on your numpad'));
        return player1.addPlays(playerChoice);
    }

    function computerRound(){
        let computerChoice = Math.random
    }
    return{
        currentGame, playerRound
    }
})()

const theBoard = (function(){
    let availableSpots = [1,2,3,4,5,6,7,8,9];
    let spots = availableSpots.length;

    
    function getSpots(){return spots};
    function available(){return availableSpots};
    function removeSpots(selection){
        const index = availableSpots.indexOf(selection);
        const x = availableSpots.splice (index,1);
        return availableSpots;
    };

    return {getSpots, available, removeSpots}
})()

const playerRound = (function(){
    let playerChoice = parseInt(prompt('choose a spot on your numpad'));
    if (!player1.getPlays().includes(playerChoice)
        && !theComputer.getPlays().includes(playerChoice)){
        return player1.addPlays(playerChoice);
    }else playerChoice = parseInt(prompt('choose a spot not taken'));
     
})();

const computerRound = (function(){
    // produces number between 1 and 9
    let computerChoice = Math.floor((Math.random() * 9) + 1);
    if(!player1.getPlays().includes(computerChoice)
    && !theComputer.getPlays().includes(computerChoice)){
        return theComputer.addPlays(computerChoice);
    }
    
    
})();
theBoard.removeSpots(5);



// player1.addPlays(2);
// player1.addPlays(5);
// player1.addPlays(8);
console.log({
    player: player1.userName,
    marker: player1.marker,
    score: player1.getScore(),
    plays: player1.getPlays()
});

console.log({
    player: theComputer.userName,
    marker: theComputer.marker,
    score: theComputer.getScore(),
    plays: theComputer.getPlays()
});
console.log(theBoard.available());

    
// ================== 
// test changemark vv
// ================== 
// player1.changeMarker();
// console.log({
//     player: player1.userName,
//     marker: player1.marker,
//     score: player1.getScore()
// });
