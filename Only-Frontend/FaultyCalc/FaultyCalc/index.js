let a = prompt("Enter First Number")
let b = prompt("Enter Second Number")
let c = prompt("Enter Operation to be performed")
let random = Math.random();

const obj = {
    "+":"-",
    "*":"+",
    "-":"/",
    "/":"**",
}

if( random > 0.1){
    // if(c == "+"){
    //     alert(a + b);
    // }
    // if(c == "-"){
    //     alert(a - b);
    // }
    // if(c == "*"){
    //     alert(a * b);
    // }
    // if(c == "/"){
    //     alert(a / b);
    // }
    alert(`The result is ${eval(`${a} ${c} ${b}`)}`)
}

else{
    c = obj[c];
    // Use of Eval
    alert(`The result is ${eval(`${a} ${c} ${b}`)}`)
}