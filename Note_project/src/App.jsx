import React, { useState } from 'react'
import { X } from 'lucide-react';

const App = () => {
  const [title, setTitle] = useState('')
  const [details, setDetails] = useState('')
  const [task, setTask] = useState([])

  const submitHandler = (e) => {
    e.preventDefault()

    const copyTask = [...task];

    copyTask.push({title,details})
    setTask(copyTask)

    setTitle('')
    setDetails('')

    const deleteNote = () => {
      
    }
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

          <button 
            className='bg-white active:scale-95 font-medium w-full text-black px-5 py-2 rounded'
            >
             Add Note
          </button>

      </form>

      <div className='lg:w-1/2 lg:border-l-2 p-10'>
        <h1 className='text-4xl font-bold'>Recent Notes</h1>
        <div className='flex flex-wrap items-start justify-start gap-5 mt-6 h-full overflow-auto'>
          {task.map(function(elem,idx){
            return <div key={idx} className=" relative h-52 w-40 rounded-2xl text-black cover bg-[url('https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTA4L3Jhd3BpeGVsX29mZmljZV8yNV9hX2N1dGVfM2RfYmxhbmtfc3RpY2t5X3Bvc3RfaXRfbm90ZV93aXRoX3RodV8wYTg4Y2U2Zi0zYjBiLTQ5NmItODUxOC0zZGExOTMyNzhkYWQucG5n.png)] p-4 bg-white">
              <h2 onClick={deleteNote} className='absolute top-5 right-5 bg-red-500 p-1 rounded-full text-xs'><X size={16} strokeWidth={2.75} /></h2>
              <h3 className='leading-tight text-xl font-bold'>{elem.title}</h3>
              <p className='mt-2 leading-tight font-medium text-gray-500'>{elem.details}</p>
            </div>
          })}
        </div>
      </div>
    </div>
  )
}

export default App