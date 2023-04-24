import React from 'react'
import { AiOutlineMenu } from 'react-icons/ai';
import {BiExit } from 'react-icons/bi';
import "../Styles/Home.css"

function SideNavbar() {
  return (
    <div className='sidenavbarcard'>
        <div className='sidenavbariconbox1' ><AiOutlineMenu className='sidenavbaricon1' /></div>
        <div className='sidenavbariconbox2'><BiExit className='sidenavbaricon2'/></div> 
    </div>
  )
}

export default SideNavbar