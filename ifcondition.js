function calculator(num1, num2, operation) {
    let result;
  
    if (operation === 'add') {
      result = num1 + num2;
    } else if (operation === 'multiply') {
      result = num1 * num2;
    } else if (operation === 'divide') {
      if (num2 === 0) {
        return 'Error: Division by zero is not allowed.';
      }
      result = num1 / num2;
    } else {
      return 'Invalid operation. Use "add", "multiply", or "divide".';
    }
  
    return result;
  }
  
  console.log(calculator(10, 5, 'add'));
  console.log(calculator(10, 5, 'multiply'));
  console.log(calculator(10, 5, 'divide'));
  console.log(calculator(10, 0, 'divide'));
  console.log(calculator(10, 5, 'subtract'));
  