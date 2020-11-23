const notes = require('./notes');
const fs = require('fs');
const yargs = require('yargs');

// fs.writeFileSync('note.txt', 'note');



yargs.version('1.1.0');


yargs.command({
    command: 'add',
    describe: 'Add note',
    builder: {
        title: {
            describe: 'Note Title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.addNote(argv.title, argv.body);
    }
});


yargs.command({
    command: 'remove',
    describe: 'Remove note',
    builder: {
        title: {
            describe: 'Note Title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.deleteNote(argv.title);
    }
});


yargs.command({
    command: 'read',
    describe: 'Print note',
    handler() {
        console.log('note');
    }
});


yargs.command({
    command: 'list',
    describe: 'List notes',
    handler(argv) {
        notes.listNotes(argv.title);
    }
});



yargs.parse();