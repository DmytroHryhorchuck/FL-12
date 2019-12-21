let a=+prompt('Enter the length of "a" side of triangle');
if (a === '' || isNaN(a) || !Number.isInteger(a)) {
    alert('input values should be ONLY numbers ')
}
let b=+prompt('Enter the length of "b" side of triangle');
if (b === '' || isNaN(b) || !Number.isInteger(a)){
    alert('input values should be ONLY numbers ')
}
let c=+prompt('Enter the length of "c" side of triangle');
if (c === '' || isNaN(c) || !Number.isInteger(a)){
    alert('input values should be ONLY numbers ')
}
if (a=== 0 || b=== 0 || c=== 0){
    alert('A triangle must have 3 sides with a positive definite length')
}else {
    if (!(a + b > c && b + c > a && a + c > b)) {
        alert('Triangle doesn’t exist');
        console.log('Triangle doesn’t exist')
    }else {
        if (a===b && b===c){
            console.log('Equilateral triangle')   
        }else if (a===b || b===c || a===c){
            console.log('Isosceles triangle')  
        }else {
            console.log('Scalene triangle')
        }
    }
}
