// generateOptions.js

function generateOptions(selectedWord, database) {
    const answers = [selectedWord];
    while (answers.length < 5) {
        const randomIndex = Math.floor(Math.random() * database.length);
        const randomWord = database[randomIndex];
        if (randomWord.Name !== selectedWord.Name && !answers.some(answer => answer.Name === randomWord.Name)) {
            answers.push(randomWord);
        }
    }
    return shuffleAnswers(answers);
}

function shuffleAnswers(answers) {
    for (let i = answers.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [answers[i], answers[j]] = [answers[j], answers[i]];
    }
    return answers;
}

module.exports = generateOptions;
