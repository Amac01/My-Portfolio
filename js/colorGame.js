/* Slide Menu */
function openSlideMenu(){
    document.getElementById("side-menu").style.width = "350px";
    document.getElementById("main").style.marginLeft = "350px";
    document.getElementById("stripe").style.marginLeft = "350px";
}

function closeSlideMenu(){
    document.getElementById("side-menu").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
    document.getElementById("stripe").style.marginLeft = "0";
}


/*Squares*/
var numSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init(){
    setUpModeButtons();
    setupSquares();
    reset();

}
    
function setUpModeButtons(){
        for(var i = 0; i < modeButtons.length; i++){
        modeButtons[i].addEventListener("click", function(){
           modeButtons[0].classList.remove("selected"); 
           modeButtons[1].classList.remove("selected"); 
            this.classList.add("selected");
            //Tenary operator
            this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
            reset();
        });
    }

 }

function setupSquares(){
    for (var i = 0; i < squares.length; i++){
        //add click listeners to squares
      squares[i].addEventListener("click", function(){
            //Grab color of clicked square 
            var clickedColor = this.style.backgroundColor;
            //Compare that color to pickedColor
            if(clickedColor === pickedColor){
                messageDisplay.textContent = "CORRECT!";
                resetButton.textContent = "Play Again?";
                changeColors(clickedColor);
                h1.style.backgroundColor = clickedColor;
            }else{
                this.style.backgroundColor = "#232323";
                messageDisplay.textContent = "try Again!";
            }
        });
    }
}
 
 



function reset(){
    //generate new colours
    colors = generateRandomColors(numSquares);
    //pick a new random colour from array
    pickedColor = pickColor();
    //change colorDisplay to match picked colour
    colorDisplay.textContent = pickedColor;
    resetButton.textContent = "New Colors";
    messageDisplay.textContent = "";
    //change colours of squares
    for(var i = 0; i < squares.length; i++){
        if(colors[i]){
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colors[i];
        }else{
            squares[i].style.display = "none";
        } 
    }
    h1.style.backgroundColor = "steelblue";
}

resetButton.addEventListener("click", function(){
    reset();

 })

function changeColors(color){
    //Loop through all squares
    for(var i = 0; i < squares.length; i++){
        //change each color to match the given color
        squares[i].style.backgroundColor = color;
    }
}

function pickColor(){
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(num){
    //Make an array
    var arr = [];
    //repeat num times
    for(var i = 0; i < num; i++){
     //get random color and push into array
      arr.push(randomColor());  
    }
    //return that array
    return arr;
}

function randomColor(){
    //pick a red from 0 - 255
    var r = Math.floor(Math.random() * 256);
    //pick a green from 0 - 255
    var g = Math.floor(Math.random() * 256);
    //pick a blue from 0 - 255
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}