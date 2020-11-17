const validator = require('validator');
const getNotes = require('./notes');

getNotes();
console.log(validator.isEmail('something.com'))