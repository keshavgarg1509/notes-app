const chalk = require('chalk');
const yargs = require('yargs');
const notes = require('./notes.js');


//const greenMsg = chalk.red.bold(process.argv[2]);
//console.log(greenMsg);

//Customize yargs version
yargs.version('1.1.0');


// add, remove, read, list


// creating new note

yargs.command({
	command: 'add',
	describe: 'Add a new Note',
	builder: {
		title: {
			describe: 'Note Title',
			demandOption: true,
			type: 'String'
		},
		body: {
			describe: 'Note body',
			demandOption: true,
			type: 'String'
		}
	},
	handler(argv){
		notes.addNote(argv.title, argv.body);
	}
})

// Removing note

yargs.command({
	command: 'remove',
	describe: 'Remove a Note',
	builder: {
		title: {
			describe: 'Note title',
			demandOption: true,
			type: 'string',
		}
	},
	handler(argv){
		notes.removeNote(argv.title);
	}
})

// List a note

yargs.command({
	command: 'list', 
	describe: 'List a new Note',
	handler(argv){
		notes.listNotes(argv);
	}
})

// Read a note

yargs.command({
	command: 'read',
	describe: 'Read a new Note',
	builder: {
		title: {
			describe: 'Note Title',
			demandOption: true,
			type: 'string',
		}
	},
	handler(argv){
		notes.readNotes(argv.title);
	}
})

// console.log(process.argv);
// console.log(yargs.argv)  OR  yargs.parse();
yargs.parse();

/*
Examples of using npm librarires, here we are using validator

const validator = require('validator');
const add = require("./utils.js");
const sum = add(4,2);
var ans = add();
console.log(ans);
console.log(validator.isURL('https/mead.com'));
*/

/*
Examples of reading/writing a new text file:

const fs = require('fs');
fs.writeFileSync('notes.txt','My name is Keshav, This document was created by Node.js!');
fs.appendFileSync('notes.txt',' This is appended message to my existing document');
*/