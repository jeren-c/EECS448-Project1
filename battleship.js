//var canvas = document.getElementById("canvas");
//var c = canvas.getContext("2d");
class Board
{
    constuctor() {
        this.height;
        this.width;
        this.board;
        this.totalShips;
        this.turn;
        this.hitX;
        this.hitY;
        
    }
    initboard(){
        this.hitX = -1;
        this.hitY = -1;
        this.turn = false;
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

    setHitX(x){
        this.hitX = parseInt(x);
    }

    setHitY(y){
        this.hitY = parseInt(y);
    }

    addShip(x,y){
        this.board[x][y] = 1;
    }

    checkBoard(x,y){
        if(this.board[x][y] == 1){
            return true;
        }else{
            return false;
        }
    }

    shipHit(x,y){
        this.board[x][y] = 2; 
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

    // Correct Orientaion, store in upper case
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
                    for(let i = 0; i < this.size; i++)
                {
                    player.addShip(this.xCoord,this.yCoord+i);
                }
            }
            else if (this.orien == "V"){
                for(let i = 0; i < this.size; i++)
                {
                    player.addShip(this.xCoord + i,this.yCoord);
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

let p2S1 = new Ships();
let p2S2 = new Ships();
let p2S3 = new Ships();
let p2S4 = new Ships();
let p2S5 = new Ships();

p2S1.setShipSize(1);
p2S2.setShipSize(2);
p2S3.setShipSize(3);
p2S4.setShipSize(4);
p2S5.setShipSize(5);


function prettyPrint(player,t){
    printThis = ""
    for(var i = 0; i < player.height; i++){
        for(var j = 0; j < player.width; j++){
            printThis += player.board[i][j] + " ";   
        }
        printThis += "<br>";
    }
    document.getElementById(t).innerHTML = printThis;
}

// document.getElementById('p1div').innerHTML = prettyPrint(p1);
// document.getElementById('p2div').innerHTML = prettyPrint(p2);

prettyPrint(p1,"p1div");
prettyPrint(p2,"p2div");


function formUpdate(){
    p1S1.setX(document.getElementById('S1X').value);
    document.getElementById('S1X').disabled = true;
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

function formUpdate1(){
    p2S1.setX(document.getElementById('2S1X').value);
    //document.getElementById('2S1X').disabled = true;
    p2S1.setY(document.getElementById('2S1Y').value);
    p2S1.setOrientation(document.getElementById('2S1Orien').value);
    
    p2S2.setX(document.getElementById('2S2X').value);
    p2S2.setY(document.getElementById('2S2Y').value);
    p2S2.setOrientation(document.getElementById('2S2Orien').value);

    p2S3.setX(document.getElementById('2S3X').value);
    p2S3.setY(document.getElementById('2S3Y').value);
    p2S3.setOrientation(document.getElementById('2S3Orien').value);

    p2S4.setX(document.getElementById('2S4X').value);
    p2S4.setY(document.getElementById('2S4Y').value);
    p2S4.setOrientation(document.getElementById('2S4Orien').value);

    p2S5.setX(document.getElementById('2S5X').value);
    p2S5.setY(document.getElementById('2S5Y').value);
    p2S5.setOrientation(document.getElementById('2S5Orien').value);

}

function setShipsP1(){
    // alert("Setting ships" + p1S1.yCoord);
    // console.log(p1S1.xCoord,p1S1.yCoord);
    // console.log(p1S2.xCoord,p1S2.yCoord);
    // console.log(p1S3.xCoord,p1S3.yCoord);
    // console.log(p1S4.xCoord,p1S4.yCoord);
    // console.log(p1S5.xCoord,p1S5.yCoord);
    
    p1S1.setShip(p1);
    p1S2.setShip(p1);
    p1S3.setShip(p1);
    p1S4.setShip(p1);
    p1S5.setShip(p1);
    
    // document.getElementById('p1div').innerHTML = prettyPrint(p1);
    prettyPrint(p1,"p1div");
    document.getElementById('p1data').hidden = true;
// document.getElementById('p2div').innerHTML = prettyPrint(p2);
}
function setShipsP2(){
    // alert("Setting ships" + p1S1.yCoord);
    // console.log(p1S1.xCoord,p1S1.yCoord);
    // console.log(p1S2.xCoord,p1S2.yCoord);
    // console.log(p1S3.xCoord,p1S3.yCoord);
    // console.log(p1S4.xCoord,p1S4.yCoord);
    // console.log(p1S5.xCoord,p1S5.yCoord);
    
    p2S1.setShip(p2);
    p2S2.setShip(p2);
    p2S3.setShip(p2);
    p2S4.setShip(p2);
    p2S5.setShip(p2);
    
    // document.getElementById('p1div').innerHTML = prettyPrint(p1);
// document.getElementById('p2div').innerHTML = prettyPrint(p2);
prettyPrint(p2,"p2div");
document.getElementById('p2data').hidden = true;

document.getElementById('pturn').innerHTML = "Player 1 turn";

// setInterval(preGameCheck(),5000);
}

function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
      currentDate = Date.now();
    } while (currentDate - date < milliseconds);
  }

function preGameCheck(){
    console.log("entering pre game check.");
    
    // document.getElementById('p2data').hidden = true;
    console.log("Divs hidden");
    p1.turn = true;
    // setInterval(runner(),5000);
    // sleep(10000);
    console.log("Pre Game check complete, starting Game!");
    // runner();

}

function getHit(){
    if(p1.turn){
        p1.setHitX(document.getElementById('hitX').value);
    //document.getElementById('2S1X').disabled = true;
        p1.setHitY(document.getElementById('hitY').value);

        // console.log(p1.hitX);
        // console.log(p1.hitY);
    }
    else{
        p2.setHitX(document.getElementById('hitX').value);
    //document.getElementById('2S1X').disabled = true;
        p2.setHitY(document.getElementById('hitY').value);
        // console.log(p2.hitX);
        // console.log(p2.hitY);
    }
    
}

function hitShip(){
    if(p1.turn){
        if(p2.checkBoard(p1.hitX,p1.hitY)){
            console.log("Ship hit");
            p2.shipHit(p1.hitX,p1.hitY);
        }else{
            console.log("Better luck next chance!");
        }
        prettyPrint(p1,"p1div");
        p1.turn = false;
        p2.turn = true;

        document.getElementById('pturn').innerHTML = "Player 1 turn";

    }else{
        if(p1.checkBoard(p2.hitX,p2.hitY)){
            console.log("Ship hit");
            p1.shipHit(p2.hitX,p2.hitY);
        }else{
            console.log("Better luck next chance!");
        }
        prettyPrint(p2,"p2div");
        p1.turn = true;
        p2.turn = false;

        document.getElementById('pturn').innerHTML = "Player 2 turn";

    }
    document.getElementById('hitX').value = "";
    document.getElementById('hitY').value = "";
}

function runner()
{
    if(p1.turn){
        // player 1 plays
        // sleep(200)
        // p1.setHitX(window.prompt("Player 1: Enter X coordinate to Hit: "));
        // p1.setHitY(window.prompt("Player 1: Enter Y coordinate to Hit: "));
        // Work with the provided Coordinates.
        
    }else if(p2.turn){
        // player 2 plays
        prettyPrint(p2,"p2div");
        p2.setHitX(window.prompt("Player 2: Enter X coordinate to Hit: "));
        p2.setHitY(window.prompt("Player 2: Enter Y coordinate to Hit: "));
        // Work with the provided Coordinates.

        
        
    }
    runner();
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


