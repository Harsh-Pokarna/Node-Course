import yargs from 'yargs'
import { hideBin } from 'yargs/helpers'
import chalk from 'chalk'
import fs from 'fs'


yargs(hideBin(process.argv)).command({
    command: 'add',
    describe: 'Add a note',
    builder: {
        title: {
            describe: 'Enter your note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Enter the body of your note',
            type: 'string'
        }
    },
    handler: function(argv) {
        // console.log(argv)
        
        // console.log('Note Added')
        // console.log(argv.title + ': ' + argv.body)
    }
}).command({
    command: 'remove',
    describe: 'Remove a note',
    handler: function() {
        console.log('Remvoe a note')
    }
}).command({
    command: 'list',
    describe: 'List all notes',
    handler: function() {
        console.log('Listing all notes')
    }
}).parse()

// console.log(yargs(process.argv).argv)
