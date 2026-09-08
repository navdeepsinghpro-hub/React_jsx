import React, { useState } from 'react'

const App = () => {

// const [num, setnum] = useState(0)

// function inc(){
//   setnum(num+1);
// }

// function dec(){
//   setnum(num-1);
// }

const [num, setnum] = useState({user:'navdeep', age:18})

const btnclick = () => {
  const newNum = {...num}

  newNum.age = 19
  newNum.user = 'gopi'

  setnum(newNum)
}

  return (
    <div>
      {/* <h1>{num}</h1>
      <button onClick={inc}>Increase</button>
      <button onClick={dec}>Decrease</button> */}
      <h1> {num.user}, {num.age} </h1>
      <button onClick={btnclick}>click</button>
    </div>
  )
}

export default App