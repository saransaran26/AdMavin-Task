import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import BucketTransfer from './BucketTransfer'
import ElementTransfer from './BucketTransfer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      {/* <BucketTransfer/> */}
      <ElementTransfer/>
    </div>
  )
}

export default App
