let a = 1
let b = 2

console.log(`a`, myMaths)

const root = document.querySelector('#root')

root
  .appendChild(document.createElement('h1'))
  .appendChild(document.createTextNode('IIFE'))

root
  .appendChild(document.createElement('p'))
  .appendChild(
    document.createTextNode(`the sum of ${a} and ${b} is ${myMaths.add(a, b)}`)
  )

root
  .appendChild(document.createElement('p'))
  .appendChild(
    document.createTextNode(
      `the difference of ${b} and ${a} is ${myMaths.subtract(a, b)}`
    )
  )
