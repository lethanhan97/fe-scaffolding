// What's the output of this?
// 1.
console.log(a)
var a = 10

// 2.
console.log(b)
const b = 10

// 3.
const obj = {
  a: 'a',
  printA: () => {
    console.log(this?.a)
  },
  anotherPrintA: function () {
    console.log(this?.a)
  },
  anothaAnotherPrintA: function () {
    const nowReallyPrintA = () => console.log(this?.a)
    nowReallyPrintA()
  },
  anotherAnotherUnathaPrintA: function () {
    const okayPrintAPlease = function () {
      console.log(this?.a)
    }
    okayPrintAPlease()
  },
}

// What do they print
obj.printA()
obj.anotherPrintA()
obj.anothaAnotherPrintA()
obj.anotherAnotherUnathaPrintA()

// What's the output?
// 4.
console.log('1')
setTimeout(() => {
  console.log('2')
}, 0)
Promise.resolve().then(() => {
  console.log('3')
})
Promise.resolve().then(() => {
  console.log('4')
  Promise.resolve().then(() => {
    console.log('5')
  })
})
console.log('6')

// 5.
// What s the output?
function print() {
  for (var i = 0; i < 3; i++) {
    setTimeout(() => console.log(i), 0)
  }
  console.log(i)
}
print()
