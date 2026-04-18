function makeThrottle<I>(callback: (...args: I[]) => void, timeout: number = 1_000) {
  let timeoutId = null

  return (...args: I[]) => {
    if (timeoutId) {
      return
    }

    timeoutId = setTimeout(() => {
      callback(...args)
      timeoutId = null
    }, timeout)
  }
}

export function ThrottleTest() {
  const onClick = () => {
    console.log('clicked')
  }

  return (
    <div>
      <button onClick={makeThrottle(onClick)}>Click me</button>
    </div>
  )
}
