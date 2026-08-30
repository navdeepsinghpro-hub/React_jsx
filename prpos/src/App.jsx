import React from 'react'
import Card from './components/Card'

const App = () => {
  return (
    <div className='parent'>
      <Card user = 'navdeep' age={18} />
    </div>
  )
}

export default App