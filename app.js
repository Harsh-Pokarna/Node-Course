import yargs from 'yargs'
import { hideBin } from 'yargs/helpers'
import chalk from 'chalk'
import fs from 'fs'
import { mAddNote as addNote, mRemoveNote as removeNote, mListNotes as listNotes } from './notes.js'
import { argv } from 'process'


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
        // const currentData = JSON.parse(fs.readFileSync('notes.json').toString())

        // console.log('The current data is: ' + currentData)

        // const data = {
        //     "title": argv.title,
        //     "body": argv.body
        // }

        // console.log(argv.title)
        
        // console.log('The data is: ' + data)

        // const newData = [...currentData + data]
    
        // console.log('The new data is: ' + newData)
        // fs.writeFileSync('notes.json', JSON.stringify(newData))
        // console.log('Note Added.. ')
        
        addNote(argv.title, argv.body)
        // console.log('Note Added')
        // console.log(argv.title + ': ' + argv.body)
    }
}).command({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
        title: {
            describe: 'Enter the title of the note you want to delete',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argv) {
        removeNote(argv.title)
    }
}).command({
    command: 'list',
    describe: 'List all notes',
    handler: function() {
        listNotes()
    }
}).parse()

// console.log(yargs(process.argv).argv)
