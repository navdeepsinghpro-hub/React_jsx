import React from 'react'

const Navbar = (props) => {
  return (
    <div>
        <p>{props.theme}</p>
        <Button>change theme</Button>
    </div>
  )
}

export default Navbar