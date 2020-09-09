// window.onload = function()
// {
//     canv = document.getElementById("canvas");
//     ctx = canv.getContext("2d"); 

//     canv.addEventListener('click', handleClick)
// }

// function getMousePosition(canv, evt)
// {
//     var rect = canv.getBoundingClientRect();
//     return{
//         x: evt.clientX - rect.left,
//         y: evt.clientY - rect.top
//     }; 
// }

// function handleClick(e)
// {
//     var pos = getMousePosition(canvas, e)
//     posx = pos.x;
//     posy = pos.y;

//     alert(posx + " " + posy); 
// }

// FUNCTION THAT DRAWS THEGRID USING CANVAS //
// we might run into trouble later on figuring out how to access each //
// 'square' in the grid but we can tackle that problem when we get there//

function drawGridPlus()
{
    var canv = document.getElementById("canvas"); 
    var ctx = canv.getContext('2d'); 
    ctx.strokeStyle = "#534C58";
    ctx.lineWidth = 4; 

    // this for loop draws the columns // 
    for(i = 0; i <= 500; i=i+50)
    {
        ctx.moveTo(i,0); // STARTING POSITION
        ctx.lineTo(i, 500); //ENDING POSITION
        ctx.stroke(); //DRAWS THE LINE
    }

    // this for loop will draw the rows //
    for(j = 0; j <= 500; j=j+50)
    {
        ctx.moveTo(0, j); 
        ctx.lineTo(500, j); 
        ctx.stroke();
    }
}

drawGridPlus();

