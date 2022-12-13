import fs from 'fs'

const day = process.argv[2]

if(!day) throw new Error('provide a day')

const files = ['index.js', 'input.txt']

const days = fs.readdirSync('days')

if(days.includes(day)) throw new Error(`the day number ${day} is already created`)

fs.mkdirSync(`days/${day}`)

for (let file of files) {
  fs.writeFileSync(`days/${day}/${file}`, '')
}
