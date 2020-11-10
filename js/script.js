let currentOperand = '';
let previousOperand = '';
let operationCalc;

function clearAll() {
  currentOperand = '';
  previousOperand = '';
  operation = undefined;
}

function delNumber() {
  currentOperand = currentOperand.toString().slice(0, -1);
}

function appendNumber(number) {
  if (number === '.' && currentOperand.includes('.')) {
    return;
  }
  currentOperand = currentOperand.toString() + number.toString();
}

function chooseOperation(operation) {
  if (currentOperand === '') return;
  if (previousOperand !== '') {
    compute();
  }
  operationCalc = operation;
  previousOperand = currentOperand;
  currentOperand = '';
}

function compute() {
  let computation;
  const prev = parseFloat(previousOperand);
  const current = parseFloat(currentOperand);
  if (isNaN(prev) || isNaN(current)) return;
  switch (operationCalc) {
    case '+':
      computation = prev + current;
      break;
    case '-':
      computation = prev - current;
      break;
    case '*':
      computation = prev * current;
      break;
    case '÷':
      computation = prev / current;
      break;
    default:
      return;
  }
  currentOperand = computation;
  operationCalc = undefined;
  previousOperand = '';
}

function getDisplayNumber(number) {
  const stringNumber = number.toString();
  const integerDigits = parseFloat(stringNumber.split('.')[0]);
  const decimalDigits = stringNumber.split('.')[1];

  let integerDisplay;
  if (isNaN(integerDigits)) {
    integerDisplay = '';
  } else {
    integerDisplay = integerDigits.toLocaleString('en', {
      maximumFractionDigits: 0,
    });
  }
  if (decimalDigits != null) {
    return `${integerDisplay}.${decimalDigits}`;
  } else {
    return integerDisplay;
  }
}

function updateDisplay() {
  currentOperandTextElement.innerHTML = getDisplayNumber(currentOperand);
  if (operationCalc != null) {
    previousOperandTextElement.innerHTML = `${getDisplayNumber(
      previousOperand
    )} ${operationCalc}`;
  } else {
    previousOperandTextElement.innerHTML = '';
  }
}

numberButtons.forEach((button) => {
  button.addEventListener('click', () => {
    appendNumber(button.innerHTML);
    updateDisplay();
  });
});

operationButtons.forEach((button) => {
  button.addEventListener('click', () => {
    chooseOperation(button.innerHTML);
    updateDisplay();
  });
});

equalsButton.addEventListener('click', () => {
  compute();
  updateDisplay();
});

allClearButton.addEventListener('click', () => {
  clearAll();
  updateDisplay();
});

deleteButton.addEventListener('click', () => {
  delNumber();
  updateDisplay();
});
