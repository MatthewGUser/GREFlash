// weightedRandomSelection.js

function weightedRandomSelection(items) {
    let selected = false;
    let item;
    while (!selected) {
        let randomIndex = Math.floor(Math.random() * items.length);
        item = items[randomIndex];
        if (test(item))
            selected = true;
    }
    return item;
}

function test(item) {
    return Math.random() * 100 < item.Weight * 5;
}

module.exports = weightedRandomSelection;
