const getNotes = require('./notes');
const chalk = require('chalk');
const yargs = require('yargs');

const command = process.argv[2];

if (command === 'add') {
    console.log('addded');
} else if (command === 'remove') {
    console.log('removed');
}