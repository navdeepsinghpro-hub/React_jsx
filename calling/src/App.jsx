import React from 'react'

const App = () => {

  async function getdata(){
    
    const response = await (fetch('https://jsonplaceholder.typicode.com/todos/1'))
  }

  return (
    <div>
      <button onClick={getdata}>Get Data</button>
    </div>
  )
}

export default App