function addOne(x) {    
    return x + 1;
}
function pipe(number, ...funcArg) {
        for(let i = 0; i < funcArg.length; i++){
        number = funcArg[i](number);
    }
    return number;
}
pipe(1, addOne);
