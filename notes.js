const fs = require('fs');
const chalk = require('chalk');
let note = 'note';



function getNotes() {
    return 'Your notes...';
}


// add
const addNote = function (title, body) {
    const notes = loadNotes();
    const duplicateNotes = notes.filter((note) => {
        return note.title === title;
    });

    if (duplicateNotes.length === 0) {
        notes.push({
            title: title,
            body: body
        });
        saveNotes(notes);
        console.log(chalk.green.inverse('Saved'));
    } else {
        console.log(chalk.orange.inverse('Duplicate'));
    };
}


// load
const loadNotes = function () {
    try {
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    } catch (e) {
        return [];
    };
}


// save
const saveNotes = function (notes) {
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataJSON);
}


// delete
const deleteNote = function (title) {
    let notes = loadNotes();
    const notesToKeep = notes.filter((note) => {
        return note.title !== title;
    });
    if (notes.length > notesToKeep.length) {
        notes = notesToKeep;
        console.log(chalk.green.inverse('Deleted'));
        saveNotes(notes);
    } else if (notes.length === notesToKeep.length) {
        return console.log(chalk.red.inverse('Nothing happened'));
    } else if (notes.length === 0) {
        console.log(chalk.orange.inverse('Empty'));
    }
}

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    deleteNote: deleteNote
};