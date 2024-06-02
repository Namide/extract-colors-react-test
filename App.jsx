import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { extractColors } from 'extract-colors'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [colors, setColors] = useState([])
  extractColors(viteLogo)
    .then(data => 
      setColors(data.map(({ hex }) => hex))
    )
    .catch(console.error)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>{ colors.map(color => (<span className="color" style={{ background: color }} key={color}></span>)) }</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
