// player will be x, or player 1 will be x

// factory functions
function createPlayer(name){
    let userName = name;
    let score = 0;
    let myMarker = 'x';

    function getScore(){return score}; 
    function improveScore(){return score++};
    function changeMark(){
        console.log('working')
        this.myMarker = 'o';
    }
    return {userName, score, myMarker, getScore, improveScore, changeMark}
    
}

const player1 = createPlayer('player1');
const theComputer = createPlayer('theComputer');
        theComputer.changeMark();
player1.improveScore();
player1.improveScore();
theComputer.improveScore();

console.log({
    player: player1.userName,
    marker: player1.myMarker,
    score: player1.getScore()
});

console.log({
    player: theComputer.userName,
    marker: theComputer.myMarker,
    score: theComputer.getScore()
});


    
// ================== 
// test changemark vv
// ================== 
// player1.changeMark();
// console.log({
//     player: player1.userName,
//     myMarker: player1.myMarker,
//     score: player1.getScore()
// });
