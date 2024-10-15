function add(num1, num2) {
    return num1 + num2;
  }
  
  function subtract(num1, num2) {
    return num1 - num2;
  }
  

  function multiply(num1, num2) {
    return num1 * num2;
  }
  
  function divide(num1, num2) {
    if (num2 !== 0) {
      return num1 / num2;
    } else {
      return "Cannot divide by zero";
    }
  }

  function greet(name) {
    console.log(`Hello ${name}`);
  }

  greet("Simple");
  
  console.log("Addition of 10 and 5:", add(10, 5));
  console.log("Subtraction of 10 and 5:", subtract(10, 5));
  console.log("Multiplication of 10 and 5:", multiply(10, 5));
  console.log("Division of 10 and 5:", divide(10, 5));
  console.log("Division of 10 and 0:", divide(10, 0));