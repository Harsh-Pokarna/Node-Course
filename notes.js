import fs from 'fs'

const addNote = function(title, body) {
    const notes = loadNotes()
    
    const data = {
        title: title,
        body: body
    }
    
    notes.push(data)
    // const newNotes = [...notes + data]
    
    saveNotes(notes)
    console.log('Note added..')
}

const removeNote = function(title) {
    console.log('The intake title is: ' + title)
    const notes = loadNotes()

    const newNotes = notes.filter((note) => {
        console.log(note.title)
        return note.title != title
    })

    // notes.forEach((note) => {
    //     if(note.title == title) {
    //         notes.remove(note)
    //     }
    // })

    console.log('New notes are: ' + JSON.stringify(newNotes))

    saveNotes(newNotes)
    console.log('Note removed')
}

const listNotes = function() {
    const notes = loadNotes()

    console.log('Your Notes are:')
    notes.forEach((note) => {
        console.log(note.title + ': ' + note.body)
    })
}

const loadNotes = function() {
    try { 
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return [...JSON.parse(dataJSON)]
    } catch (e) {
        return []
    }
}

const saveNotes = function(notes) {
    const notesJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', notesJSON)
}

export const mAddNote = addNote
export const mRemoveNote = removeNote
export const mListNotes = listNotes