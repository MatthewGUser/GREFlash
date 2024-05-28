// checkAnswer.js

const displayFlashcard = require('./flashcard.js');
const updateWeight = require('./UpdateWeight.js');
const getUserInput = require('./getUserInput.js');

async function checkAnswer(correctAnswer, options) {
    const userAnswerName = getUserInput("Your answer (word): ");
    const userAnswer = options.find(option => option.Name.toLowerCase() === userAnswerName.toLowerCase());

    if (userAnswer && userAnswer.Name === correctAnswer.Name) {
        await updateWeight(correctAnswer.Name, Math.max(0, correctAnswer.Weight - 1));
        console.log("\n---[Correct]---\n");
        displayFlashcard(correctAnswer);
    } else {
        await updateWeight(correctAnswer.Name, correctAnswer.Weight + 1);
        if (userAnswer) {
            await updateWeight(userAnswer.Name, userAnswer.Weight + 1);
            console.log("\n---[Incorrect]---\n");
            displayFlashcard(correctAnswer);
            console.log("---[Your answer]---\n");
            displayFlashcard(userAnswer);
        } else {
            console.log("Invalid answer. Please try again.");
        }
    }
}

module.exports = checkAnswer;
