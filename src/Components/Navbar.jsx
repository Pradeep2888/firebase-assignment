import React from 'react'
import "../Styles/Navbar.css"

function Navbar() {
  return (
    <div className='navbox1' >
        <div className='logobox' >
            <img className='logoimg' src='https://internshala.com/cached_uploads/logo%2F5e65e00aaeb3e1583734794.png'  alt='logo' />
        </div>
        
        <div className='navbox2'>
        <div className='navbox2child1' ><a href="/upload" >Upload</a></div>
        <div className='navbox2child2' ><p>25</p></div>
        <div className='navbox2child3' ><p>25</p></div>
        </div>
    </div>
  )
}

export default Navbar