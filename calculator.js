function add(a,b){
    return a+b;
    
}
console.log("Add",add(2,3))
function substract(a,b){
    return a-b;
}
console.log("substract",substract(2,3))
function multiply(a,b){
    return a*b;
}
console.log("multiply",multiply(2,3))
function divide(a,b){
    if(b===0){
        return "Error";
    }
    return a/b;
}
console.log("divide",divide(2,3))
