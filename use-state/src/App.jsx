import React, { useState } from 'react'

const App = () => {

const [num, setnum] = useState(0)

function inc(){
  setnum(num+1);
}

function dec(){
  setnum(num-1);
}

  return (
    <div>
      <h1>{num}</h1>
      <button onClick={inc}>Increase</button>
      <button onClick={dec}>Decrease</button>
    </div>
  )
}

export default App