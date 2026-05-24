import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [feedback, setFeedback] = useState('Start Counting')

  const increment = () => {
    setCount(count + 1)
    if (count + 1 > 10) {
      setFeedback('Count is too high!')
    } else {
      setFeedback('Count incremented!')
    }
  }

  const decrement = () => {
    setCount(count - 1)
    if (count - 1 < 0) {
      setFeedback('Count is too low!')
    } else {
      setFeedback('Count decremented!')
    }
  }

  return (
    <div className="main">
      <div className="container">
        <h1>Counter App</h1>
        <p className="counter">Counter: {count}</p>
        <button  className="button" onClick={increment}>Increment</button>
        <button className="button" onClick={decrement}>Decrement</button>
        <p className="feedback">{feedback}</p>
      </div>
    </div>
  )
}

export default App
