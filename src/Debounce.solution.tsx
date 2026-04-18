function makeDebounced<I>(callback: (...args: I[]) => void, timeout: number = 500) {
  let timeoutId = null

  return (...args: I[]) => {
    if (timeoutId) {
      clearTimeout(timeoutId)
    }

    timeoutId = setTimeout(() => {
      return callback(...args)
    }, timeout)
  }
}

export function DebounceProblem() {
  const onClick = () => {
    console.log('clicked')
  }

  return (
    <div>
      <button onClick={makeDebounced(onClick)}>Click me</button>
    </div>
  )
}
