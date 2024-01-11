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
    const gameEnd = 'the game has ended';
    // const youWin = `you've won the game with ${player1.getPlays()}`;
    // const youLose = `the computer has won the game with ${theComputer.getPlays()}`;
    const displayPlayer = document.getElementById('player-score');
    const displayComputer = document.getElementById('computer-score');


    // players factory 
    function createPlayer(name, mark){
        let score = 0;
        let marker;

        if (mark){
            marker = mark
            }else  marker = 'x';
        let plays = [];
        
        function getMarker(){return marker};
        function getScore() {return score};
        function userName() {return name};
        function sortedPlays() {return getPlays().sort()}; 
        function getPlays() {return plays};
        function improveScore(){return score++};
        function addPlays(spot){
            return this.getPlays().push(spot);
        }
        function resetPlayer(){plays.length = 0};
        function changeMarker(){
            switch(marker){
                case 'x': this.marker = 'o'; break;
                case 'o': this.marker = 'x'; break;
                default: console.log(throwError);
            }
        
        
        }
        
        return {getMarker, getScore, sortedPlays, getPlays, 
            userName, improveScore, addPlays, resetPlayer, changeMarker}
        
    }
    9
    // create players
    const player1 = createPlayer('player1','x');
    const theComputer = createPlayer('theComputer', 'o');
        

    // create the board factory
    function createBoard(){
        let spots = [1,2,3,4,5,6,7,8,9];
        // let spotsLeft = spots.length;
        
        function getSpots(){return spots};
        function spotsLength(){return spots.length};
        function removeSpots(played){
            const index = spots.indexOf(played);
            const x = spots.splice (index,1);
        };
        function resetSpots(){
            spots.length = 0;
            spots = [1,2,3,4,5,6,7,8,9];
        };
    
        return {getSpots, spotsLength, removeSpots, resetSpots}
    }

    const theBoard = createBoard();
    const userInput = document.getElementById('player-selection');
    // let computerChoice;
        // listen for click 
    let playButton = document.getElementById("play").addEventListener('click', ()=>{
        let input = parseInt(userInput.value)
        if(playerRound(input) !== tryAgain){
            render(player1)
            computerRound();
            render(theComputer);
            userInput.value = '';
            userInput.focus();
        };
        
    });
    let resetButton = document.getElementById("reset").addEventListener('click', resetGame);

    function resetGame(){
        player1.resetPlayer();
        theComputer.resetPlayer();
        theBoard.resetSpots();
        boardArray.forEach((el)=>{
            el.innerText = '';

        })
    }
        
    

    function playerRound(playerChoice){
        // let tryAgain;
        if (!player1.getPlays().includes(playerChoice)
            && !theComputer.getPlays().includes(playerChoice)){
            theBoard.removeSpots(playerChoice);
            player1.addPlays(playerChoice);
            checkSpotsCondition();
            checkCombinations(player1);
        }else {alert('choose a spot not taken');}
            // return tryAgain;
    };
    
    function computerRound(){
        let computerRandom = Math.floor((Math.random() * theBoard.spotsLength()));
        let computerChoice = theBoard.getSpots()[computerRandom];
        if (computerChoice !== undefined){
            theBoard.removeSpots(computerChoice);
            theComputer.addPlays(computerChoice);
            checkSpotsCondition();
            checkCombinations(theComputer);
        }else console.log(throwError);
        
    };


    function render(player){
        displayPlayer.innerHTML = player1.getScore();

        player.getPlays().forEach((element)=>{
            let gridElement = document.getElementById('spot-'+element);
            if (!gridElement.innerText){
                gridElement.innerText = player.getMarker();}
            })
        

        console.log({
            player: player.userName(),
            marker: player.getMarker(),
            // score: player1.getScore(),
            plays: player.getPlays(),
        });
        console.log(`${player} chose`);
        console.log(player.getPlays());
        displayComputer.innerHTML = theComputer.getScore();
        // console.log({
        //     player: theComputer.userName(),
        //     marker: theComputer.getMarker(),
        //     // score: theComputer.getScore(),
        //     plays: theComputer.getPlays()
        // });
    }

    function checkSpotsCondition(){
        if (theBoard.spotsLength() === 0){
            console.log(gameEnd);
        }
    }

    function checkCombinations(thePlayer){
        if (thePlayer.getPlays().length >= 3){
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
            if(   playerString.match(winStrings[i][0])
               && playerString.match(winStrings[i][2])
               && playerString.match(winStrings[i][4]) 
               ){
                console.log(`${thePlayer.userName()} wins`);
                thePlayer.improveScore();
                console.log(`${thePlayer.userName()} score: ${thePlayer.getScore()}`)
            }
        }
    }
   
        
    // })() 
    

// css html setup 
const gameBoard = document.getElementById("game-board");
const boardNodeList = gameBoard.querySelectorAll('div');
const boardArray = Array.from(boardNodeList);
    boardArray.forEach((element)=>{
        element.classList.add('grid-item');
        element.addEventListener('click',()=>{
            let clickInput = element.id.slice(-1)
            let input = parseInt(clickInput);
            
            if(theBoard.getSpots().includes(input)){
                playerRound(input);
                render(player1);
                computerRound();
                render(theComputer);
            }else {alert('pick an empty square')}    
        })
    })




// .forEach((element)=>{
//     element.classList.add('grid-item');
// })


