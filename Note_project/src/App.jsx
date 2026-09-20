import React, { useState } from 'react'

const App = () => {
  const [title, setTitle] = useState('')
  const [details, setDetails] = useState()

  const submitHandler = (e) => {
    e.preventDefault()
    console.log(title);
    setTitle('')
    setDetails('')
  }


  return (
    <div className='h-screen lg:flex bg-black text-white '>
      <form onSubmit={(e)=>{
        submitHandler(e)
      }} className='flex gap-4 lg:w-1/2 flex-col p-10 items-start'>

         <h1 className='text-4xl font-bold'>Add Notes</h1>

          <input
            type="text" 
            placeholder='Enter Notes Heading'
            className='px-5 w-full font-medium py-2 border-2 outline-none rounded'
            value={title}
            onChange={(e)=>{
              setTitle(e.target.value)
            }}
          />

          <textarea 
            type="text" 
            placeholder='Write Details'
            className='px-5 h-32 font-medium w-full py-2 border-2 flex items-start flex-row outline-none rounded'
            value={details}
            onChange={(e)=>{
              setDetails(e.target.value)
            }}
           />

          <button className='bg-white font-medium w-full text-black px-5 py-2 rounded'>Add Note</button>

      </form>

      <div className='lg:w-1/2 lg:border-l-2 p-10 h-full overflow-auto'>
        <h1 className='text-4xl font-bold'>Recent Notes</h1>
        <div className='flex flex-wrap gap-5 mt-5 '>
          <div className="h-52 w-40 rounded-2xl bg-white"></div>
          <div className="h-52 w-40 rounded-2xl bg-white"></div>
        </div>
      </div>
    </div>
  )
}

export default App