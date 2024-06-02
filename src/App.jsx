import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { extractColors } from 'extract-colors'
import './App.css'

function App() {
  const [viteColors, setViteColors] = useState([])
  extractColors(viteLogo)
    .then(data => 
      setViteColors(data.map(({ hex }) => hex))
    )
    .catch(console.error)
  const [reactColors, setReactColors] = useState([])
  extractColors(reactLogo)
    .then(data => 
      setReactColors(data.map(({ hex }) => hex))
    )
    .catch(console.error)

  return (
    <>
      <div>
        <strong>Vite - colors</strong>
        <img src={viteLogo} className="logo" alt="Vite logo" />
        <h1>{ viteColors.map(color => (<span className="color" style={{ background: color }} key={color}></span>)) }</h1>
      </div>
      <hr />
      <div>
        <strong>React - colors</strong>
        <img src={reactLogo} className="logo react" alt="React logo" />
        <h1>{ reactColors.map(color => (<span className="color" style={{ background: color }} key={color}></span>)) }</h1>
      </div>
    </>
  )
}

export default App
