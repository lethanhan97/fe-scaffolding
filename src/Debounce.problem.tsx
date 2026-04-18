function makeDebounced<I>(callback: (...args: I[]) => void, timeout: number = 500) {
  return callback
}

export function DebounceTest() {
  const onClick = () => {
    console.log('clicked')
  }

  return (
    <div>
      <button onClick={makeDebounced(onClick)}>Click me</button>
    </div>
  )
}
