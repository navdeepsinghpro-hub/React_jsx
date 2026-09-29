import React from 'react'
import { useNavigate } from 'react-router-dom'


const About = () => {

  let navigate = useNavigate()
  const btnClk = () => {
  
  navigate('/')
}

  return (
    <div>
      <button onClick={btnClk} className='bg-emerald-800 px-5 py-2 rounded m-2 cursor-pointer active:scale-95'>Return to home page</button>
        <h1>About</h1>
    </div>
  )
}

export default About