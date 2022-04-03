import fs from 'fs'

// const book = {
//     title: 'a;dlk a;ldkfj',
//     author: "k;lajdf;a adflkj"
// }

// const bookJSON = JSON.stringify(book)
// console.log(bookJSON)

// const newBook = JSON.parse(bookJSON)
// console.log(newBook)
// console.log('The titles is: ' + newBook.title)

// fs.writeFileSync('1-json.json', bookJSON)

const dataBuffer = fs.readFileSync('1-json.json')
const dataJSON = dataBuffer.toString()
const data = JSON.parse(dataJSON)

console.log(data.title)
