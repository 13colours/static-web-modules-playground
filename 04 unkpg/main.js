// 01: Webpack UMD
// const myMaths = moduleExcerciseWebpack

// 02: Rollup UMD
const myMaths = rollupModule

const root = document.querySelector('#root')

const a = 3
const b = 5

root
  .appendChild(document.createElement('h1'))
  .appendChild(document.createTextNode('unpkg'))

root
  .appendChild(document.createElement('p'))
  .appendChild(
    document.createTextNode(`the sum of ${a} and ${b} is ${myMaths.add(a, b)}`)
  )
