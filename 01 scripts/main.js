const root = document.querySelector('#root')

let a = 1
let b = 2

root
  .appendChild(document.createElement('h1'))
  .appendChild(document.createTextNode('Scripts'))

root
  .appendChild(document.createElement('p'))
  .appendChild(
    document.createTextNode(`the sum of ${a} and ${b} is ${add(a, b)}`)
  )

root
  .appendChild(document.createElement('p'))
  .appendChild(
    document.createTextNode(`the diff of ${b} and ${a} is ${subtract(a, b)}`)
  )
