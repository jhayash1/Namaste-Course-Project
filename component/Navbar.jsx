import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
    const [btn,setBtn] = useState(true)
    const handle=()=>{
        setBtn(!btn)
    }
  return (
    <div className='nav'>
        <ul>
            <li>
                <Link to='/'>Home</Link>
                </li>
            <li>
                <Link to='/about'>About</Link>
            </li>
            <li>
                <Link>Cart</Link>
            </li>
            <button onClick={handle}>{btn ? 'Login' : 'Logout'}</button>
        </ul>

    </div>
  )
}
