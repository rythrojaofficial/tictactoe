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

const jared = createPlayer('jared');
jared.improveScore();
jared.improveScore();
jared.improveScore();

console.log({
    player: jared.userName,
    myMarker: jared.myMarker,
    score: jared.getScore()
});

jared.changeMark();
console.log({
    player: jared.userName,
    myMarker: jared.myMarker,
    score: jared.getScore()
});
