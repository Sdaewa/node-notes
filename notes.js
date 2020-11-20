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
        console.log('Saved');
    } else {
        console.log('Duplicate');
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
    const newNote = notes.filter((note) => {
        return note.title !== title;
    });
    if (notes.length !== 0) {
        notes = newNote;
        console.log(chalk.green('Deleted'));
        saveNotes(notes);
    } else if (notes.length === 0) {
        return console.log(chalk.red('Empty list'));
    } else if (notes.length !== 0 && notes.includes(title)) {
        console.log(chalk.blueBright('Sorry not here'));
    }

}

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    deleteNote: deleteNote
};