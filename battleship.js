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
        this.board = [];
        for (let i=0;i<9;i++){
			this.board[i] = [];
			for (let j = 0;j<9;j++){
                this.board[i][j] = 0; // 0 represents water
                console.log("Board initialized");
			}
		}
    }

    checkCoord(x,y=0,t=0){
        if(t==0){
            console.log("Checking only 1 coord");
            if(!(x < this.height && x < this.width)){
                return false;
            }
        }else{
            console.log("Checking 2 coords");
        // Check within board, return false if not
            if(!((x < this.height && x < this.width) && (y < this.height && y < this.width))){
                console.log("NOT WITHIN THE BOARD");
                return false;
            }
            // If its within the board, ship exists? return false if 1 
            if(this.board[x][y] == 1 ){
                console.log("SHIP EXISTS");
                return false;
            }
        }
        return true;
    }

    setHitX(x){
        if(this.checkCoord(x)){
            this.hitX = parseInt(x);
        }
        else{
            return false;
        }
        
    }

    setHitY(y){
        if(this.checkCoord(y)){
            this.hitY = parseInt(y);
        }
        else{
            return false;
        }
            
    }

    addShip(x,y){
        console.log("ADDING SHIP");
        if(this.checkCoord(x,y,1)){
            this.board[x][y] = 1;
            console.log("done");
        }
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

    setX(x){
        // if()
        this.xCoord = parseInt(x);
       
    }
    
    setY(y){
        
        this.yCoord = parseInt(y);
    }


    setShipSize(s){
        this.size = parseInt(s);
    }

    setOrientation(o){
        this.orien = o;
    }

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
    console.log("Pretty printing");
    printThis = ""
    for(var i = 0; i < player.height; i++){
        printThis += " X" + i + " : ";
        for(var j = 0; j < player.width; j++){
            printThis += "&nbsp" + player.board[i][j] + "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp";   
        }
        printThis += "<br>";
    }
    printThis += "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp";
    for(var i = 0; i < player.width; i++){
        printThis += " Y" + i + "&nbsp&nbsp&nbsp"
    }
    document.getElementById(t).innerHTML = printThis;
}

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

    console.log("setting p1");
    
    p1S1.setShip(p1);
    p1S2.setShip(p1);
    p1S3.setShip(p1);
    p1S4.setShip(p1);
    p1S5.setShip(p1);
    
    prettyPrint(p1,"p1div");
    document.getElementById('p1data').hidden = true;
    // document.getElementById('p1div').hidden = true;
    
}
function setShipsP2(){
    
    console.log("setting p2")
    
    p2S1.setShip(p2);
    p2S2.setShip(p2);
    p2S3.setShip(p2);
    p2S4.setShip(p2);
    p2S5.setShip(p2);
    

prettyPrint(p2,"p2div");
document.getElementById('p2data').hidden = true;
// document.getElementById('p2div').hidden = true;

p1.turn = true;

document.getElementById('pturn').innerHTML = "Player 1 turn";

}

function getHit(){
    if(p1.turn){
        p1.setHitX(document.getElementById('hitX').value);
        p1.setHitY(document.getElementById('hitY').value);
    }
    else{
        p2.setHitX(document.getElementById('hitX').value);
        p2.setHitY(document.getElementById('hitY').value);
        
    }
    
}

function hitShip(){
    if(p1.turn){
        console.log(p1.hitX,p1.hitY);
        if(p2.checkBoard(p1.hitX,p1.hitY)){
            console.log("Ship hit");
            p2.shipHit(p1.hitX,p1.hitY);
        }else{
            console.log("Better luck next chance!");
        }
        prettyPrint(p1,"p1div");
        p1.turn = false;
        p2.turn = true;

        document.getElementById('pturn').innerHTML = "Player 2 turn";

    }else{
        console.log(p2.hitX,p2.hitY);
        if(p1.checkBoard(p2.hitX,p2.hitY)){
            console.log("Ship hit");
            p1.shipHit(p2.hitX,p2.hitY);
        }else{
            console.log("Better luck next chance!");
        }
        prettyPrint(p2,"p2div");
        p1.turn = true;
        p2.turn = false;

        document.getElementById('pturn').innerHTML = "Player 1 turn";

    }
    document.getElementById('hitX').value = "";
    document.getElementById('hitY').value = "";
}


