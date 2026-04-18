// Implement map using reduce
Array.prototype.map = function (callback) {
  return this.reduce((aggregator, currentItem, index) => {
    aggregator.push(callback(currentItem, index, this))
    return aggregator
  }, [])
}

const test = [1, 2, 3]
const res = test.map((n) => n * 2)
console.log(res)
