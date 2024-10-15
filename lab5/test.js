// function adds two numbers together
function add(num1, num2) {
    return num1 + num2;
  }
  
  // function subtracts two numbers
  function subtract(num1, num2) {
    return num1 - num2;
  }
  
// function multiplies
  function multiply(num1, num2) {
    return num1 * num2;
  }
  
// function divides two numbers if possible
  function divide(num1, num2) {
    if (num2 !== 0) {
      return num1 / num2;
    } else {
      return "Cannot divide by zero";
    }
  }
// function greets user
  function greet(name) {
    console.log(`Hello ${name}`);
  }

if(add(2,4)!=6){
    throw "sum of 2 and 4 is 6"
}

if(add(4,6)!=10){
    throw false
}

if(add(6,10)!=16){
    throw Error 
}

if(subtract(16,10)!=6){
    throw "subtracting 10 from 6 is 4"
}

if(subtract(10,6)!=4){
    throw false
}

if(subtract(6,4)!=2){
    throw Error
}

if(multiply(2,4)!=8){
    throw "multiplying 2 and 4 is 8"
}

if(multiply(4,8)!=32){
    throw false
}

if(multiply(8,32)!=256){
    throw Error
}

if(divide(256,32)!=8){
    throw "dividing 256 by 32 is 8"
}

if(divide(32,8)!=4){
    throw false
}

if(divide(8,4)!=2){
    throw Error
}