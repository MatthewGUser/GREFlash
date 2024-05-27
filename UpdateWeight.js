// updateWeight.js

const sqlite3 = require('sqlite3').verbose();

// Function to update the weight of a word in the database
async function updateWeight(wordName, newWeight) {
    return new Promise((resolve, reject) => {
        // Open the database
        const db = new sqlite3.Database('./Database/Data.db', sqlite3.OPEN_READWRITE, (err) => {
            if (err) {
                console.error('Error opening database:', err.message);
                return reject(err);
            }
        });

        // Update the weight in the database
        db.run('UPDATE Cards SET Weight = ? WHERE Name = ?', [newWeight, wordName], function(err) {
            if (err) {
                console.error(`Error updating weight for '${wordName}':`, err.message);
                return reject(err);
            } else {
                resolve();
            }
        });

        // Close the database connection
        db.close((err) => {
            if (err) {
                console.error('Error closing database connection:', err.message);
            }
        });
    });
}

module.exports = updateWeight;
