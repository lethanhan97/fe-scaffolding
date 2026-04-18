import { useEffect, useState } from 'react'

function Ball({ style }: { style?: React.CSSProperties }) {
  return (
    <div
      style={{
        width: 50,
        height: 50,
        backgroundColor: 'red',
        borderRadius: 99999,
        ...style,
      }}
    />
  )
}

const THRESHOLD = 500
export function BouncingBallProblem() {
  const [translateYAmount, setTranslateYAmount] = useState({
    amount: 0,
    direction: 1,
  })

  useEffect(() => {
    const interval = setInterval(() => {
      setTranslateYAmount((prev) => {
        let { direction } = prev
        if (prev.amount > THRESHOLD) return prev

        if (prev.amount === THRESHOLD) direction = -1
        if (prev.amount === 0) direction = 1

        return {
          amount: prev.amount + 1 * direction,
          direction,
        }
      })
    }, 1)

    return () => clearInterval(interval)
  }, [])

  const handleChangeDirection = () => {
    setTranslateYAmount((prev) => {
      return {
        amount: prev.amount,
        direction: prev.direction * -1,
      }
    })
  }

  return (
    <div>
      <p>Bouncing ball problem</p>
      <button onClick={handleChangeDirection}>Change direction</button>
      <Ball
        style={{
          transform: `translateY(${translateYAmount.amount}px)`,
        }}
      />
    </div>
  )
}
