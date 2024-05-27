// getUserInput.js

const readlineSync = require('readline-sync');
const { execSync } = require('child_process');

// Function to get user input synchronously
function getUserInput(prompt) {
    return readlineSync.question(prompt).trim();
}

function getUserInput(prompt) {
    return execSync('termux-dialog text input -t "User Input" -i ""').toString().trim();
}

module.exports = getUserInput;
