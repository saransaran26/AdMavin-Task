import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import GameComponent from './GameComponent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <GameComponent/>
    </div>
  )
}

export default App
