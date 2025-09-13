function calculator(num1, num2, operator) {
  switch(operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    case '/':
      if (num2 === 0) {
        throw new Error("Division by zero is not allowed");
      }
      return num1 / num2;
    default:
      throw new Error("Invalid operator");
  }
}

console.log(calculator(2, 6, '+'));  
console.log(calculator(45, 43, '-'));  
console.log(calculator(545, 33, '*'));  
console.log(calculator(56, 93, '/'));  
