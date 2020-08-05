var resetBtn = document.querySelector("#refreshBtn");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");

var gameMode = 6;


resetBtn.addEventListener('click',function(){
    refreshColors(gameMode);        
});
easyBtn.addEventListener('click',function(){
    gameMode=3;
    refreshColors(gameMode);
    hardBtn.classList.remove("selected");
    easyBtn.classList.add("selected");
});
hardBtn.addEventListener('click',function(){
    gameMode=6;    
    refreshColors(gameMode);
    hardBtn.classList.add("selected");
    easyBtn.classList.remove("selected");
});

var colors = generateRandomColors(gameMode);

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

function refreshColors(num){
    document.querySelector("#message").textContent = "";
    colors = generateRandomColors(num);
    pickedColor = pickColor();
    colorToDisplay.textContent = pickedColor;
    setSquaresColor();
    if(num===3){
        hideSquares();
    }
    
    resetBtn.textContent = "New color";
    document.querySelector("#header").style.backgroundColor = "steelblue";
}

function setSquaresColor(){
    for(var i = 0;i<squares.length;i++){
        squares[i].style.backgroundColor = colors[i];
    }
}

function hideSquares(){
    for(var i = 3;i<squares.length;i++){
        squares[i].style.backgroundColor = "#232323";
    }
}