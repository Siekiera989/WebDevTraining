var p1 = document.querySelector("#p1");
var p2 = document.querySelector("#p2");
var reset = document.querySelector("#reset");
var maxPointInput = document.querySelector("#maxPointInput");
var gameOver = false;
var p1Value = 0;
var p2Value = 0;
var maxPoints = 5;

p1.addEventListener('click', increaseP1);
p2.addEventListener('click', increaseP2);
reset.addEventListener('click', resetValues);
maxPointInput.addEventListener('change', changeMaxPoint);


function increaseP1(){
    if(!gameOver){
        p1Value++;
        refreshPoints("#p1span",p1Value);
        if(p1Value===maxPoints){
            gameOver=true;
            setWinner("#p1span");
        }
    }
}
function increaseP2(){
    if(!gameOver){
        p2Value++;
        refreshPoints("#p2span",p2Value);
        if(p2Value===maxPoints){
            gameOver=true;
            setWinner("#p2span");            
        }
    }
}

function resetValues(){
    p1Value=0;
    p2Value=0;
    gameOver=false;
    refreshPoints("#p1span",p1Value);
    refreshPoints("#p2span",p2Value);
    resetClass();
}

function refreshPoints(elementName, val){
    document.querySelector(elementName).textContent = val;    
}

function setWinner(elementName){
    document.querySelector(elementName).classList.add("winner");
}

function resetClass(){
    document.querySelector("#p1span").classList.remove("winner");
    document.querySelector("#p2span").classList.remove("winner");
}

function changeMaxPoint(){
    document.querySelector("#maxValue").textContent = maxPointInput.value;
    maxPoints = maxPointInput.valueAsNumber;
    resetValues();
}