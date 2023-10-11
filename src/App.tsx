import { useState } from 'react'

import './App.css'
import AuthComponent from './AuthComponent';

function App() {
  

  return (
    <>

      <h1>Vite + React</h1>
      <div className="card">
        <AuthComponent />
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
