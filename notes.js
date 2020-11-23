const fs = require('fs');
const chalk = require('chalk');
let note = 'note';


// list
function listNotes() {
    const notes = loadNotes();
    if (notes.length > 0) {
        console.log(chalk.magenta.inverse('NOTES'));
        notes.forEach((note) => {
            console.log(chalk.underline(note.title));
        });
    } else {
        console.log(chalk.yellow.inverse('Empty'));
    }
}


function getNotes() {
    console.log('your notes...')
}


// add
const addNote = (title, body) => {
    const notes = loadNotes();
    const duplicateNotes = notes.filter(note => {
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
        console.log(chalk.yellow.inverse('Duplicate'));
    };
}


// load
const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    } catch (e) {
        return [];
    };
}


// save
const saveNotes = notes => {
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataJSON);
}


// delete
const deleteNote = (title) => {
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
    }
}

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    listNotes: listNotes,
    deleteNote: deleteNote
};