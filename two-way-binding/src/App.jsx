import React, { Suspense, useState } from 'react'

const App = () => {

  const [title, settitle] = useState('')

  const submitHandle = (e) => {
    e.preventDefault()
    console.log("done")
  }

  return (
    <div>
      <form onSubmit={(e)=>{
          submitHandle(e)
        }}>
        <input type="text" placeholder='Enter nam'
        value={title} onChange={(elem)=>{
          settitle(elem.target.value)
        }}/>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App