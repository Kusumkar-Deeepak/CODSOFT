const result = document.getElementById('result');
const buttons = document.querySelectorAll('.buttons button');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const buttonText = button.textContent;
    if (buttonText === '=') {
      calculateResult();
    } else if (buttonText === 'C') {
      clearResult();
    } else if (buttonText === 'del') {
        deleteLastCharacter();
    } else {
      appendToResult(buttonText);
    }
  });
});

function calculateResult() {
  try {
    result.value = eval(result.value);
  } catch (error) {
    result.value = 'Error';
  }
}

function clearResult() {
  result.value = '';
}

function appendToResult(text) {
  result.value += text;
}

function deleteLastCharacter() {
    result.value = result.value.slice(0, -1); // Remove the last character from the input field
  }