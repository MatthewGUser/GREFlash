// main.js

const getFlashcards = require('./FlashcardDatabase.js').getFlashcards;
const weightedRandomSelection = require('./WeightedRandomSelection.js');
const generateOptions = require('./GenerateOptions.js');
const checkAnswer = require('./CheckAnswer.js');

// Function to introduce a delay
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function runFlashcards() {
    try {
        const flashcards = await getFlashcards();

        while (true) {
            const correct = weightedRandomSelection(flashcards);
            const options = generateOptions(correct, flashcards);

            console.log(`\nDefinition: ${correct.Definition}\n`);
            options.forEach(option => {
                console.log(`${option.Name}`);
            });

            await checkAnswer(correct, options);
            await delay(3000);  // Wait for 3 seconds before next question
        }
    } catch (error) {
        console.error('An error occurred:', error);
    }
}

runFlashcards();
