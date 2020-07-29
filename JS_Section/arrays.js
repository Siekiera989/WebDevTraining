console.log("działa")

function printReverse(arr){
    for(var i = arr.length-1;i>=0;i--){
        console.log(arr[i]);
    }
}
printReverse([2,1,5,6]);

function isUniform(arr){
    var item = arr[0];
    for(var i = 1; i<=arr.length;i++){
        if(item!==arr[i]){ 
            return false;
        };
    } 
    return true;
}
isUniform([1,1,1]);
isUniform([1,2,1]);

function sumArray(arr){
    var result=0;
    arr.forEach(function(element) {
        result+=element;
    });
        console.log(result);
}