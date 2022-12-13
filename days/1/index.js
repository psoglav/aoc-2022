import fs from 'fs'
import {sum, max} from '../../helpers'

const input = fs.readFileSync('input.txt', { encoding: 'utf-8' }).split('\n')
let elves = []

let i = 0

input.forEach((el) => {
  if (!elves[i]) elves[i] = []
  if (!el) {
    i++
    return
  }
  elves[i].push(+el)
})

const totalElves = elves.map((elf) => sum(elf))

let max1 = max(totalElves)
let max2 = max(totalElves.filter(a => a != max1))
let max3 = max(totalElves.filter(a => a != max1 && a != max2))

let sum3 = sum([max1, max2, max3])

console.log(sum3)