const calcDisplay = document.getElementById('calc-display');
const themeSwitch = document.getElementById('theme-switch');

function appendToCalc(value) {
  if (calcDisplay.innerText === '0') {
    calcDisplay.innerText = value;
  } else {
    calcDisplay.innerText += value;
  }
}

function clearCalc() {
  calcDisplay.innerText = '0';
}

function deleteLast() {
  const content = calcDisplay.innerText;
  calcDisplay.innerText = content.length > 1 ? content.slice(0, -1) : '0';
}

function calculateResult() {
  try {
    const sanitized = calcDisplay.innerText.replace(/\^/g, '**');
    const result = eval(sanitized);
    calcDisplay.innerText = result;
  } catch {
    calcDisplay.innerText = 'Error';
  }
}

// Theme switcher
themeSwitch.addEventListener('change', () => {
  document.body.classList.toggle('theme-dark');
  document.body.classList.toggle('theme-light');
});
