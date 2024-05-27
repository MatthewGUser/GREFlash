// flashcardDatabase.js

const sqlite3 = require('sqlite3').verbose();

function getFlashcards() {
    return new Promise((resolve, reject) => {
        const db = new sqlite3.Database('./Database/Data.db', sqlite3.OPEN_READWRITE);
        let flashcards = [];

        db.all('SELECT * FROM Cards', (err, rows) => {
            if (err) {
                console.error(err.message);
                reject(err);
                return;
            }
            flashcards = rows;

            db.close((closeErr) => {
                if (closeErr) {
                    console.error(closeErr.message);
                    reject(closeErr);
                    return;
                }
            });

            resolve(flashcards);
        });
    });
}

module.exports = { getFlashcards };
