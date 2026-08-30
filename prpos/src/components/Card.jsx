import React from 'react'

const Card = (props, age) => {
  return (
    <div>
         <div className="card">
                <img src="https://images.unsplash.com/photo-1779896412071-bf3160aad19e?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw4fHx8ZW58MHx8fHx8" alt="" />
                <h1>Navdeep singh</h1>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex, autem?</p>
                <button>View profile</button>
            </div>
    </div>
  )
}

export default Card