import { add } from './add.js'
import { subtract } from './subtract.js'

const a = 3
const b = 4

const root = document.querySelector('#root')

root
  .appendChild(document.createElement('h1'))
  .appendChild(document.createTextNode('ESM'))

root
  .appendChild(document.createElement('p'))
  .appendChild(
    document.createTextNode(`the sum of ${a} and ${b} is ${add(a, b)}`)
  )

root
  .appendChild(document.createElement('p'))
  .appendChild(
    document.createTextNode(
      `the difference of ${b} and ${a} is ${subtract(a, b)}`
    )
  )
