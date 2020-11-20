const fs = require('fs');
let note = 'note';

function getNotes() {
    return 'Your notes...';
}

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
    } else {
        console.log('Duplicate');
    }
    saveNotes(notes);
}

const loadNotes = function () {
    try {
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    } catch (e) {
        return [];
    };
}

const saveNotes = function (notes) {
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataJSON);
}

module.exports = {
    getNotes: getNotes,
    addNote: addNote
};