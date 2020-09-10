class Board
{
    constuctor() {
        this.height;
        this.width;
        this.board;
        this
    }
    myH(){
        console.log("9");
    }
    initboard(){
        this.board = []
        for (let i=0;i<9;i++){
			this.board[i] = [];
			for (let j = 0;j<9;j++){
                this.board[i][j] = 0; // 0 represents water
                console.log("Board initialized");
			}
		}
    }
}

class Ships{
    constructor() {
        this.startingCoords;
        this.endingCoords; 
    }

    // checks if the ship is destroyed 
    isDestroyed(){

    }

}

let p1Board = new Board();
let p2Board = new Board();

p1Board.initboard();
p2Board.initboard();

class UI {

    constructor(){

    }

    init(){


    }

    /* 
        places ships on the grid. 
        para - coordinates of the ship (or we can pass an array containing the coordinated for all the ship for 1 player.)
    */
    function placeShips(x,y,s,o){
    
    }

    /* checks for click and on click if the tile clicked was a ship or part of ship. If yes change the 1 on the grid to 2. 
    checks if ship is 
    x y passed are the coordinates of the tile clicked 
    */
    clickCheck(x,y){

    }

    // checks if all the ships are destroyed
    checkForWin(){

    }
}

class Graphic {

}

function main(){

}

