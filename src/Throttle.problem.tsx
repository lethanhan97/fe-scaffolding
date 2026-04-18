function makeThrottle<I>(callback: (...args: I[]) => void, timeout: number = 1_000) {
  return callback
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
