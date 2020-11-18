const getNotes = require('./notes');
const chalk = require('chalk');
const yargs = require('yargs');

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
        console.log('Title: ' + argv.title);
        console.log('Body: ' + argv.body);
    }
});

yargs.command({
    command: 'remove',
    describe: 'Remove note',
    handler: function () {
        console.log('Removing note');
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