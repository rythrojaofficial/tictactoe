// player will be x, or player 1 will be x
// ===================
// factory functions
// ===================

const throwError = 'seems to be a problem here cheif'
const isWork = "is worky"


// =========
// the game 
// =========

// const theGame = (function(){
    let currentGame = {};
    

    // players factory 
    function createPlayer(name){
        let userName = name;
        let score = 0;
        let marker = 'x';
        let plays = [];
        
        function improveScore(){return score++};
        function addPlays(spot){
            return this.plays.push(spot);
        }
        function changeMarker(){
            switch(marker){
                case 'x': this.marker = 'o'; break;
                case 'o': this.marker = 'x'; break;
                default: console.log(throwError);
            }
        }
        return {plays, userName, marker, score, improveScore, addPlays, changeMarker}
        
    }
    // create players
    const player1 = createPlayer('player1');
    const theComputer = createPlayer('theComputer');
        theComputer.changeMarker();

    // create the board factory
    function createBoard(){
        let spots = [1,2,3,4,5,6,7,8,9];
        // let spotsLeft = spots.length;
        
        function getSpots(){return spots.length};
        function removeSpots(played){
            const index = spots.indexOf(played);
            const x = spots.splice (index,1);
        };
    
        return {spots, getSpots, removeSpots}
    }
    const theBoard = createBoard();
    let playerChoice;
    let computerChoice;
        // listen for click 
    let listener = document.getElementById("play").addEventListener('click', ()=>{
        let input = parseInt(document.getElementById("player-selection").value)
        playerRound(input);
        computerRound();
        render();
        checkWinCondition();
    });
        
    

    function playerRound(playerChoice){
        if (!player1.plays.includes(playerChoice)
            && !theComputer.plays.includes(playerChoice)){
            theBoard.removeSpots(playerChoice);
            player1.addPlays(playerChoice);
        }else {playerChoice = undefined;
            alert('choose a spot not taken');}
         
    };
    
    function computerRound(){
        let computerRandom = Math.floor((Math.random() * theBoard.getSpots()));
        computerChoice = theBoard.spots[computerRandom];
        if (computerChoice !== undefined){
            theBoard.removeSpots(computerChoice);
            theComputer.addPlays(computerChoice);
        }else console.log(throwError);
        
    };


    function render(){
        console.log({
            player: player1.userName,
            marker: player1.marker,
            score: player1.score,
            plays: player1.plays
        });

        console.log({
            player: theComputer.userName,
            marker: theComputer.marker,
            score: theComputer.score,
            plays: theComputer.plays
        });

        console.log(`player chose`);
            console.log(player1.plays);
        console.log(`computer chose`);
            console.log(theComputer.plays);
        console.log('available slots:')
            console.log(theBoard.spots);
    }

    function checkWinCondition(){
        const gameEnd = 'thegame has ended';
        const youWin = `you've won the game with ${player1.plays}`;
        const youLose = `the computer has won the game with ${theComputer.plays}`;

        if (theBoard.getSpots() === 0){
            console.log(gameEnd);
        }
        
        // if (player1.plays.includes()

        
    }

   
        
    // })() 
    




    
// ================== 
// test changemark vv
// ================== 
// player1.changeMarker();
// console.log({
//     player: player1.userName,
//     marker: player1.marker,
//     score: player1.getScore()
// });
