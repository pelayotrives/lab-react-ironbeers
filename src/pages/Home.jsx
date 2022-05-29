import React from 'react'
import { Routes, Route, NavLink } from "react-router-dom"

function Home() {

  return (

    <div>
    
        <br />
        <div>
            
            <br /><br />
            <NavLink to={"/beers"} style={{ textDecoration: 'none' }}>
                <img src={"../beers.png"} alt="" />
                <div className='indexBlock'>
                    <h1>All Beers</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ut ultricies metus. Donec pretium elementum malesuada. In hac habitasse platea dictumst. Aliquam orci dui, elementum vitae libero vel, semper laoreet libero. Suspendisse tempus, lorem in tincidunt ullamcorper, tellus sapien imperdiet leo, ut tristique augue leo cursus justo.</p>
                </div>
            </NavLink>
            
        </div>

        <br />
        <div>

            <br /><br />
            <NavLink to={"/random-beer"} style={{ textDecoration: 'none' }}>
                <img src={"../random-beer.png"} alt="" /> 
                <div className='indexBlock'>
                    <h1>Random Beer</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ut ultricies metus. Donec pretium elementum malesuada. In hac habitasse platea dictumst. Aliquam orci dui, elementum vitae libero vel, semper laoreet libero. Suspendisse tempus, lorem in tincidunt ullamcorper, tellus sapien imperdiet leo, ut tristique augue leo cursus justo.</p>
                </div>
            </NavLink>

        </div>

        <br />
        <div>

            <br /><br />
            <NavLink to={"/new-beer"} style={{ textDecoration: 'none' }}>
                <img src={"../new-beer.png"} alt="" />
                <div className='indexBlock'>
                    <h1>New Beer</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ut ultricies metus. Donec pretium elementum malesuada. In hac habitasse platea dictumst. Aliquam orci dui, elementum vitae libero vel, semper laoreet libero. Suspendisse tempus, lorem in tincidunt ullamcorper, tellus sapien imperdiet leo, ut tristique augue leo cursus justo.</p>
                </div>
            </NavLink>

        </div>


        

    </div>

  )

}

export default Home