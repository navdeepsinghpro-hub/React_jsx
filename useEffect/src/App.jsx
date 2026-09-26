import React, { useEffect, useState } from 'react'

const App = () => {

  const [a, setA] = useState(0)
  const [b, setB] = useState(0)

  function A(){
    setA(b+1)
  }

  function B(){
    setB(b+1)
  }

  useEffect(function(){
    console.log("a is changed")
  }, [a])

  return (
    <div>
      <h1>{a}</h1>
      <h1>{b}</h1>
      <button onClick={A}>A</button>
      <button onClick={B}>B</button>
    </div>
  )
}

export default App