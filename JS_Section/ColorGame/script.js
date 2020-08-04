var resetBtn = document.querySelector("#refreshBtn");
resetBtn.addEventListener('click',refreshColors);

var colors = generateRandomColors(6);

function generateRandomColors(num){
    var arr = [];
    for (var i = 0; i < num; i++){
        arr.push(randomColor());
    }
    return arr;
}

function randomColor(){
    var red = Math.floor(Math.random()*256);
    var green = Math.floor(Math.random()*256);
    var blue = Math.floor(Math.random()*256);
    
    return "rgb("+red+", "+green+", "+blue+")";
}


var pickedColor = pickColor();

function pickColor(){
    var random = Math.floor(Math.random()*colors.length)
    return colors[random];
}

var squares = document.querySelectorAll(".square");
var colorToDisplay = document.querySelector("#colorToDisplay");
colorToDisplay.textContent = pickedColor;



for(var i = 0;i<squares.length;i++){
    squares[i].style.backgroundColor = colors[i];
    squares[i].addEventListener('click', checkIfRightColor);
}

function checkIfRightColor(){
    if(this.style.backgroundColor===pickedColor){
        document.querySelector("#message").textContent = "Correct";
        changeBackground();
        resetBtn.textContent = "Play Again?"
    }
    else{
        this.style.backgroundColor = "#232323";
        document.querySelector("#message").textContent = "Try again!";
    }
}

function changeBackground(){
    document.querySelector("#header").style.backgroundColor = pickedColor;
    for(var i = 0;i<squares.length;i++){
        squares[i].style.backgroundColor = pickedColor;
    }
}

function refreshColors(){
    colors = generateRandomColors(6);
    pickedColor = pickColor();
    colorToDisplay.textContent = pickedColor;
    setSquaresColor();
    document.querySelector("#header").style.backgroundColor = "#232323";
    resetBtn.textContent = "New color";
}

function setSquaresColor(){
    for(var i = 0;i<squares.length;i++){
        squares[i].style.backgroundColor = colors[i];
    }
}


