import React from 'react'
import "../Styles/Home.css"
import Card1 from '../Components/Card1'
import Card2 from '../Components/Card2'
import Card3 from '../Components/Card3'
import SideNavbar from '../Components/SideNavbar'

function Home() {
  return (
    <div className='homebox1' >
      <SideNavbar/>
          <Card1/>
          <Card2/>
          <Card3/>
    </div>
  )
}

export default Home