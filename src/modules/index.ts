const result = document.getElementById("result") as HTMLInputElement;
const buttons = document.querySelectorAll("button");

let currentNumber = "0";
let previousNumber = "";
let operation: string | undefined;
let resultValue = 0;

function updateResult() {
  result.value = currentNumber;
}

function clear() {
  currentNumber = "0";
  previousNumber = "";
  operation = undefined;
  updateResult();
}

function appendNumber(number: string) {
  if (currentNumber === "0") {
    currentNumber = number;
  } else {
    currentNumber += number;
  }
  updateResult();
}

function setOperation(operator: string) {
  if (operation) {
    calculate();
  }
  previousNumber = currentNumber;
  currentNumber = "0";
  operation = operator;
}

function calculate() {
  const num1 = parseFloat(previousNumber);
  const num2 = parseFloat(currentNumber);
  if (operation === "+") {
    resultValue = num1 + num2;
  } else if (operation === "-") {
    resultValue = num1 - num2;
  } else if (operation === "*") {
    resultValue = num1 * num2;
  } else if (operation === "/") {
    resultValue = num1 / num2;
  }
  currentNumber = resultValue.toString();
  previousNumber = "";
  operation = undefined;
  updateResult();
}
  
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const buttonText = button.innerText;
    switch (buttonText) {
      case "C":
        clear();
        break;
      case "+/-":
        currentNumber = (parseFloat(currentNumber) * -1).toString();
        updateResult();
        break;
      case "%":
        currentNumber = (parseFloat(currentNumber) / 100).toString();
        updateResult();
        break;
      case ".":
        if (!currentNumber.includes(".")) {
          currentNumber += ".";
        }
        updateResult();
        break;
      case "+":
      case "-":
      case "*":
      case "/":
        setOperation(buttonText);
        break;
      case "=":
        calculate();
        break;
      default:
        if (currentNumber === "0" && buttonText !== ".") {
          currentNumber = buttonText;
        } else {
          appendNumber(buttonText);
        }
        updateResult();
      }
  });
});

const img = document.createElement('img');
document.body.append(img);

const imgUrl = new URL('../images/bg.jpg', import.meta.url);
img.src = imgUrl.toString();

