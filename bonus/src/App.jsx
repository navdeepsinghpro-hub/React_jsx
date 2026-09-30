import React, { useState } from 'react'
import Navbar from './components/Navbar'

const App = () => {

  const [theme, setTheme] = useState('light')
    

  return (
    <div>
      <h1>This is {light}</h1>

      <Navbar theme={theme} />
    </div>
  )
}

export default App