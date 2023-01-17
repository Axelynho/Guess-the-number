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

    console.log(input.value);

    input.value = '';
}

function printMessage(message) {
    let li = document.createElement('li');

    li.textContent = message;

    output.appendChild(li);
}