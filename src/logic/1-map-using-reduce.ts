// Implement map using reduce
Array.prototype.map = function (callback) {
  return []
}

const test = [1, 2, 3]
const res = test.map((n) => n * 2)
console.log(res) // should print [2,4,6]
