let name = '';
let number = Math.floor(Math.random() * 100);
let guesses = 0;

const output = document.querySelector('#output');
const prompt = document.querySelector('#prompt');
const input = document.querySelector('#prompt input');

prompt.addEventListener('submit', handleSubmit);

printMessage('Enter your name');

input.focus();

function handleSubmit(event) {
    event.preventDefault();

    processInput(input.value);

    input.value = '';
}

function printMessage(message) {
    let li = document.createElement('li');

    li.textContent = message;

    output.appendChild(li);
}

function clearOutput() {
    for (let i = 0; i < output.children.length; i++) {
        output.removeChild(output.children[i]);
    }
}

function processInput(input) {
    if (!input) return;

    if (!name) {
        name = input;
        clearOutput();
        printMessage(`${name}, загадано число от 0 до 100. 
        Попробуй отгадать его за наименьшее количество попыток. 
        После каждой попытки я скажу "Less than that", "Greater than that" или "Got it!".`);
        return;
    }

    printMessage(input);

    let guess = Number.parseInt(input);
    if(Number.isNaN(guess)) return;
    guesses +=1;
    if(guess > number) {
        printMessage('Less than that,try again')
    } else if (guess < number) {
        printMessage('Greater than that,try again')
    } else {
        printMessage(`Got it! ${guess}.`);
        printMessage(`You won in ${guesses} tries`);
        printMessage('Game over');

        prompt.remove();
    }
}