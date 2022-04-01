import yargs from 'yargs'
import { hideBin } from 'yargs/helpers'
import chalk from 'chalk'


yargs(hideBin(process.argv)).command({
    command: 'add',
    describe: 'Add a note',
    handler: function() {
        console.log('Adding a note..')
    }
}).parse()

yargs(hideBin(process.argv)).command({
    command: 'remove',
    describe: 'Remove a note',
    handler: function() {
        console.log('Remvoe a note')
    }
})

console.log(yargs(process.argv.slice(2)).argv)
