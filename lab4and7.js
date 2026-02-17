let a = 0.1;
let b = 10;


function add(num1, num2){ // this would add
    if (testing(num1, num2) != false){
        return num1 + num2
    }
    console.log('Must not proceed, invalid number')
    
}

function subtract(num1, num2){ // this would subtract
    if (testing(num1, num2) != false){
        return num1 - num2
    }
    console.log('Must not proceed, invalid number')
}

function multiply(num1, num2){ // this would multiply
    if (testing(num1, num2) != false){
        return num1 * num2
    }
    console.log('Must not proceed, invalid number')
}

function divide(num1, num2){ // this would divide
    if (testing(num1, num2) != false){
        return num1 / num2
    }
    console.log('Must not proceed, invalid number')
}

function nameCall(name){ // this would concatenate two strings
    return "Hello" + " " + name;

}

function testing(n1, n2){
    if (n1 <= 0 || n2 <= 0) {
        //throw new Error('Test Failed: Number entered is invalid');
        return false;
    } else if (Number.isInteger(n1) || Number.isInteger(n2)){
        return false;
    }
    return true;

}

console.log(add(a,b));
console.log(subtract(a,b));
console.log(multiply(a,b));
console.log(divide(a,b));
console.log(nameCall("Kim"))
