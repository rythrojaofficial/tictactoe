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

    function getScore(){return score}; 
    function improveScore(){return score++};
    function changeMarker(){
        switch(this.marker){
            case 'x': this.marker = 'o'; break;
            case 'o': this.marker = 'x'; break;
            default: console.log(throwError);
        }
    }
    return {userName, score, marker, getScore, improveScore, changeMarker}
    
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

})



console.log({
    player: player1.userName,
    marker: player1.marker,
    score: player1.getScore()
});

console.log({
    player: theComputer.userName,
    marker: theComputer.marker,
    score: theComputer.getScore()
});


    
// ================== 
// test changemark vv
// ================== 
// player1.changeMarker();
// console.log({
//     player: player1.userName,
//     marker: player1.marker,
//     score: player1.getScore()
// });
