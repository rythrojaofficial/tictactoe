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
    const gameEnd = 'the game has ended';
    // const youWin = `you've won the game with ${player1.getPlays()}`;
    // const youLose = `the computer has won the game with ${theComputer.getPlays()}`;

    // players factory 
    function createPlayer(name){
        let userName = name;
        let score = 0;
        let marker = 'x';
        let plays = [];
        
        function sortedPlays() {return getPlays().sort()}; 
        function getPlays() {return plays};
        function improveScore(){return score++};
        function addPlays(spot){
            return this.getPlays().push(spot);
        }
        function changeMarker(){
            switch(marker){
                case 'x': this.marker = 'o'; break;
                case 'o': this.marker = 'x'; break;
                default: console.log(throwError);
            }
        }
        return {userName, marker, score, sortedPlays, getPlays, improveScore, addPlays, changeMarker}
        
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
    });
        
    

    function playerRound(playerChoice){
        if (!player1.getPlays().includes(playerChoice)
            && !theComputer.getPlays().includes(playerChoice)){
            theBoard.removeSpots(playerChoice);
            player1.addPlays(playerChoice);
            checkSpotsCondition();
            checkCombinations(player1);
        }else {playerChoice = undefined;
            alert('choose a spot not taken');}
         
    };
    
    function computerRound(){
        let computerRandom = Math.floor((Math.random() * theBoard.getSpots()));
        computerChoice = theBoard.spots[computerRandom];
        if (computerChoice !== undefined){
            theBoard.removeSpots(computerChoice);
            theComputer.addPlays(computerChoice);
            checkSpotsCondition();
            checkCombinations(theComputer);
        }else console.log(throwError);
        
    };


    function render(){
        console.log({
            player: player1.userName,
            marker: player1.marker,
            score: player1.score,
            plays: player1.getPlays()
        });

        console.log({
            player: theComputer.userName,
            marker: theComputer.marker,
            score: theComputer.score,
            plays: theComputer.getPlays()
        });

        console.log(`player chose`);
            console.log(player1.getPlays());
        console.log(`computer chose`);
            console.log(theComputer.getPlays());
        console.log('available slots:')
            console.log(theBoard.spots);
    }

    function checkSpotsCondition(){
        if (theBoard.getSpots() === 0){
            console.log(gameEnd);
        }
    }

    function checkCombinations(thePlayer){
        if (thePlayer.getPlays().length >= 3){
            console.log(isWork);
            directComparison(thePlayer);
        }

    }

    function directComparison(thePlayer){
        // win conditions 
        const winCombinations = [
            // horizontal
            [1,2,3],
            [4,5,6],
            [7,8,9],
            // vertical
            [1,4,7],
            [2,5,8],
            [3,6,9],
            // diagonal
            [1,5,9],
            [3,5,7]
        ];
        const winStrings = winCombinations.map((array)=> array.toString());
        let playerString = thePlayer.sortedPlays().toString();
        

        for (let i = 0; i < winStrings.length; i++){
            // console.log(winStrings[i]);
            if(playerString === winStrings[i]){
                // console.log(`${thePlayer} has won with ${thePlayer.sortedPlays}`)
                console.log('weiner');
                console.log(gameEnd);
            }
        }
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
