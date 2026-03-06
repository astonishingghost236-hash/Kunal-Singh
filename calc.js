let display = document.querySelector('#display');

function appendNumber(num) {
    display.value += num;
}

function appendOperator(op) {
    if (display.value === '') return;
    display.value += ' ' + op + ' ';
}

function calculate() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error';
    }
}

function clearDisplay() {
    display.value = '';
}