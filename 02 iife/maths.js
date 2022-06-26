var myMaths = (function () {
  'use strict'

  function add(a, b) {
    return a + b
  }

  function subtract(a, b) {
    return b - a
  }

  return {
    add,
    subtract,
  }
})()
