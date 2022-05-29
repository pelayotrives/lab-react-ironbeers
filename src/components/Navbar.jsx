import React from 'react'
import { NavLink } from "react-router-dom"

function Navbar() {

  return (

    <div>
        <div className='navbar'>
            <NavLink to={"/"}>
                <img src="../homeicon.png" alt="" />
            </NavLink>
        </div>   
    </div>

  )

}

export default Navbar