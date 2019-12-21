let a = prompt('Enter the numeric value "a" for solve Quadratic equation (ax2 + bx + c = 0)');
let b = prompt('Enter the numeric value "b" for solve Quadratic equation (ax2 + bx + c = 0)');
let c = prompt('Enter the numeric value "c" for solve Quadratic equation (ax2 + bx + c = 0)');
let four = 4;
let two = 2;
if (a === '' || isNaN(a)) {
    console.log('Invalid input data')
}
if (b === '' || isNaN(b)) {
    console.log('Invalid input data')
}
if (c === '' || isNaN(c)) {
    console.log('Invalid input data')
}
if (a !== '' || isNaN(a) && b !== '' || isNaN(b) && c !== '' || isNaN(c)) {
    let d = b * b - four * a * c;
    if (d) {
        console.log(`The discriminant is equal ${d}`);
        if (d > 0) {
            let x1 = Math.floor(-b + Math.sqrt(d) / two * a);
            let x2 = Math.floor(-b - Math.sqrt(d) / two * a);
            console.log(`x1 = ${x1} and x2 = ${x2}`)
        }else if (d === 0) {
            let x = -b / two * a
            console.log(`x = ${x}`)
        }else if (d < 0) {
            console.log('no solution')
        }
    }else {
        console.log('Discriminant not identified')
    }
}