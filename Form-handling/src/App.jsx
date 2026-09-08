import React, { Suspense } from 'react'

const App = () => {

  const submitHandle = (e) => {
    e.preventDefault()
    console.log("done")
  }

  return (
    <div>
      <form onSubmit={(e)=>{
          submitHandle(e)
        }}>
        <input type="text" placeholder='Enter name' />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App