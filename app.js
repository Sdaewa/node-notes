const notes = require('./notes');
const fs = require('fs');
const chalk = require('chalk');
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
    handler: function (argv) {
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
    handler: function (argv) {
        notes.deleteNote(argv.title);
    }
});


yargs.command({
    command: 'read',
    describe: 'Print note',
    handler: function () {
        console.log('note');
    }
});


yargs.command({
    command: 'list',
    describe: 'List notes',
    handler: function () {
        console.log('notes');
    }
});



yargs.parse();

// const dataBuffer = fs.readFileSync('1-json.json');
// const dataJSON = dataBuffer.toString();
// const data = JSON.parse(dataJSON);
// data.name = 'Luis';
// data.age = '29';
// data.planet = 'Mars';

// const newDataJSON = JSON.stringify(data);
// const log = fs.writeFileSync('1-json.json', newDataJSON);

// console.log(log);