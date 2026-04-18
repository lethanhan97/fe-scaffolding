function flatten(arr: unknown[]) {
  const result = []

  arr.forEach((element) => {
    if (Array.isArray(element)) {
      result.push(...flatten(element))
    } else {
      result.push(element)
    }
  })

  return result
}

const result = flatten([1, [2, [3, 4]], 5])
console.log(result)
