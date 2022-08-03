/**
 * 一个自制的简单模块系统的例子
 */

var caculator = (function () {
  var name = 'caculator'
  console.log('Running ', name)
  return {
    name,
    add: (num1, num2) => num1 + num2,
    sub: (num1, num2) => num1 - num2,
    mul: (num1, num2) => num1 * num2,
    div: (num1, num2) => num1 / num2,
  }
})()

console.log(caculator.add(1, 2))
