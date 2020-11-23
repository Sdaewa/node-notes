const fs = require('fs');
const chalk = require('chalk');
const {
    title
} = require('process');



// list
function listNotes() {
    const notes = loadNotes();
    if (notes.length > 0) {
        console.log(chalk.magenta.inverse('NOTES'));
        notes.forEach((note) => {
            console.log(chalk.underline(note.title));
        });
    } else {
        console.log(chalk.magenta.inverse('NOTES'));
        console.log(chalk.yellow('Empty'));
    }
}


function getNotes() {
    console.log('your notes...')
}


// add
const addNote = (title, body) => {
    const notes = loadNotes();
    const duplicateNote = notes.find((note) => {
        note.title === title;
    })
    if (!duplicateNote) {
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


// read
const readNote = (title) => {
    const notes = loadNotes();
    const note = notes.find(note => note.title === title);

    if (note) {
        console.log(chalk.yellow.inverse(title));
        console.log(chalk.white(note.body));
    } else {
        console.log(chalk.red.inverse('No match'));
    }
}

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    listNotes: listNotes,
    deleteNote: deleteNote,
    readNote: readNote
};