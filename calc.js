add = (a, b) => a + b;
subtract = (a, b) => a - b;
multiply = (a, b) => a * b;
divide = (a, b) => a / b;

calculation = (operation) => {
  let n1 = Number(document.getElementById("one").value);
  let n2 = Number(document.getElementById("two").value);
  let result;
  switch (operation) {
    case "add":
      result = add(n1, n2);
      break;
    case "subtract":
      result = subtract(n1, n2);
      break;
    case "multiply":
      result = multiply(n1, n2);
      break;
    case "divide":
      result = divide(n1, n2);
      break;
    default:
      result = "wrong";
  }
  document.getElementById("result").innerText = `Result = ${result}`;
};
