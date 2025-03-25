import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { TankVolume } from "./charts/tank-volume";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="card">
        <TankVolume width={350} height={400}></TankVolume>
      </div>
      <p className="read-the-docs" onClick={() => setCount((prev) => prev + 10)}>
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
