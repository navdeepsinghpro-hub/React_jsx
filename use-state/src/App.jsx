import React, { useState } from 'react'

const App = () => {

const [num, setnum] = useState(10)

function changeNum(){
  setnum(20);
}

  return (
    <div>
       <div>
      <h1>value of num is {num} </h1>
      <button onClick={changeNum}>click</button>
    </div>
    </div>
  )
}

export default App