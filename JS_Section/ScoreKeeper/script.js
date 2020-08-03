var p1 = document.querySelector("#p1");
var p2 = document.querySelector("#p2");
var reset = document.querySelector("#reset");

p1.addEventListener('click', increaseP1);
p2.addEventListener('click', increaseP2);
reset.addEventListener('click', resetValues)

var p1Value = 0;
var p2Value = 0;
var maxPoints = 5;

function increaseP1(){
    if(p1Value<maxPoints || p2Value<maxPoints){
        p1Value++;
        console.log(p1Value);
    }
}
function increaseP2(){
    if(p2Value<maxPoints || p1Value<maxPoints){
        p2Value++;
        console.log(p2Value);
    }
}

function resetValues(){
    p1Value=0;
    p2Value=0;
}