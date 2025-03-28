import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {multiplyCount} from "./utils/multiplyCount/multiplyCout.ts";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => multiplyCount(count,50))}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
        <p>Another change, now it should not be deployed :D :D </p>
        <p>That is CD POC</p>
        <p>Just change, should not be deployed automatically</p>
        <p>Change that SHOULD BE NOW ON ON NELIFY!!!!!!</p>
    </>
  )
}

export default App
