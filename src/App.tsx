import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Touch</h1>
      <p>
        <code>to the climax</code>
      </p>
      <div className="card">
        <div className="circular-counter">
          <button
            className="circular-button"
            onClick={() => setCount((count) => count + 1)}
          >
            {count}
          </button>
        </div>
      </div>
    </>
  )
}

export default App