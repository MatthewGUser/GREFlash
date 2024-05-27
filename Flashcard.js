// flashcard.js

function displayFlashcard(flashcard) {
    console.log(`>>> ${flashcard.Name} (${flashcard.Type})`);
    console.log(`Definition: ${flashcard.Definition}`);
    console.log(`Example: ${flashcard.Example}`);
    console.log();
}

module.exports = displayFlashcard;
