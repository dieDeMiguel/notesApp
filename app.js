const notes = require('./notes.js');
const chalk = require('chalk');
const yargs = require('yargs');

//Customize yargs version 
yargs.version('1.1.0');

//Create a command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
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

//Create a remove commandd
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
        title: {
            describe: 'Title of the Note',
            demandOption: true,
            type: 'String'
        }
    },
    handler(argv) {
        notes.removeNote(argv.title);
    }
});

//Create  list command
yargs.command({
    command: 'list',
    describe: 'list commands',
    handler() {
        notes.listNotes();
    }
});

//Create a read command
yargs.command({
    command: 'read',
    describe: 'read the commands',
    builder: {
        title: {
            describe: 'Read the notes',
            demandOption: true,
            type: 'String'
        }
    },
    handler(argv) {
        notes.readNote(argv.title);
    }
});


yargs.parse();


