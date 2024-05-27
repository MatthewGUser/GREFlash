// getUserInput.js

const readlineSync = require('readline-sync');

// Function to get user input synchronously
function getUserInput(prompt) {
    return readlineSync.question(prompt).trim();
}

module.exports = getUserInput;
