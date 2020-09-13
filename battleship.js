//var canvas = document.getElementById("canvas");
//var c = canvas.getContext("2d");
class Board
{
    constuctor() {
        this.height;
        this.width;
        this.board;
        this.totalShips;
        
    }
    initboard(){
        this.height = 9;
        this.width = 9;
        this.board = []
        for (let i=0;i<9;i++){
			this.board[i] = [];
			for (let j = 0;j<9;j++){
                this.board[i][j] = 0; // 0 represents water
                console.log("Board initialized");
			}
		}
    }

    addShip(x,y){
        this.board[x][y] = 1
    }
}

class Ships{
    constructor() {
        this.xCoord;
        this.yCoord;
        this.size;
        this.orien;
    
    }

    // Do Limit check on x,y so that theya re within the board
    setX(x){
        this.xCoord = parseInt(x);
       
    }
    
    setY(y){
        
        this.yCoord = parseInt(y);
    }


    // Check the allowed size
    setShipSize(s){
        this.size = parseInt(s);
    }

    // Correct Orientaion
    setOrientation(o){
        this.orien = o;
    }

    // Once everything is checked, just set the ship.
    setShip(player){
        if (this.size == 1){
            player.addShip(this.xCoord,this.yCoord);
        }
        else {
            if(this.orien == "H"){
                    for(let i = 1; i < this.size; i++)
                {
                    player.addShip(this.xCoord + i,this.yCoord);
                }
            }
            else if (this.orien == "V"){
                for(let i = 1; i < this.size; i++)
                {
                    player.addShip(this.xCoord,this.yCoord+i);
                }
            }
        
        }
        
    }
    
    // }
    // // checks if the ship is destroyed 
    // isDestroyed(){

    // }


}

let p1 = new Board();
let p2 = new Board();

p1.initboard();
p2.initboard();

let p1S1 = new Ships();
let p1S2 = new Ships();
let p1S3 = new Ships();
let p1S4 = new Ships();
let p1S5 = new Ships();

p1S1.setShipSize(1);
p1S2.setShipSize(2);
p1S3.setShipSize(3);
p1S4.setShipSize(4);
p1S5.setShipSize(5);



// p1Ship1.setShipSize(window.prompt("size of your ship? "));
// alert("ship size " + p1Ship1.size);


// p1Ship1.setX(window.prompt("Enter starting ship Xcoords: "));
// alert("starting ship Xcoordinate " + p1Ship1.xCoord);

// p1Ship1.setY(window.prompt("Enter starting ship Ycoords: "));
// alert("starting ship Ycoordinate " + p1Ship1.yCoord);

// p1Ship1.setOrientation(window.prompt("(V/H): "));
// alert("Orentation " + p1Ship1.orien);

// p1Ship1.setShip(p1);

function prettyPrint(player){
    printThis = ""
    for(var i = 0; i < player.height; i++){
        for(var j = 0; j < player.width; j++){
            printThis += player.board[i][j] + " ";   
        }
        printThis += "<br>";
    }
    return printThis;
}

document.getElementById('p1div').innerHTML = prettyPrint(p1);
document.getElementById('p2div').innerHTML = prettyPrint(p2);



function formUpdate(){
    p1S1.setX(document.getElementById('S1X').value);
    //document.getElementById('S1X').disabled = true;
    p1S1.setY(document.getElementById('S1Y').value);
    p1S1.setOrientation(document.getElementById('S1Orien').value);
    
    p1S2.setX(document.getElementById('S2X').value);
    p1S2.setY(document.getElementById('S2Y').value);
    p1S2.setOrientation(document.getElementById('S2Orien').value);

    p1S3.setX(document.getElementById('S3X').value);
    p1S3.setY(document.getElementById('S3Y').value);
    p1S3.setOrientation(document.getElementById('S3Orien').value);

    p1S4.setX(document.getElementById('S4X').value);
    p1S4.setY(document.getElementById('S4Y').value);
    p1S4.setOrientation(document.getElementById('S4Orien').value);

    p1S5.setX(document.getElementById('S5X').value);
    p1S5.setY(document.getElementById('S5Y').value);
    p1S5.setOrientation(document.getElementById('S5Orien').value);

}


function setShipsP1(){
    alert("Setting ships" + p1S1.yCoord);
    p1S1.setShip(p1);
    document.getElementById('p1div').innerHTML = prettyPrint(p1);
// document.getElementById('p2div').innerHTML = prettyPrint(p2);
}

// document.getElementById('p1data').hidden = true;


// class UI {

//     constructor(){

//     }

//     init(){


//     }

//     /* 
//         places ships on the grid. 
//         para - coordinates of the ship (or we can pass an array containing the coordinated for all the ship for 1 player.)
//     */
//     function placeShips(x,y,s,o){
    
//     }

//     /* checks for click and on click if the tile clicked was a ship or part of ship. If yes change the 1 on the grid to 2. 
//     checks if ship is 
//     x y passed are the coordinates of the tile clicked 
//     */
//     clickCheck(x,y){

//     }

//     // checks if all the ships are destroyed
//     checkForWin(){

//     }
// }

// class Graphic {

// }

// function main(){
//     alert("Welcome to the Battleship game");
//     var p1ShipSize = window.prompt("size of your? ");
//     alert("ship size" + p1ShipSize);


// }


