import React from 'react'

function Card1() {
  return (
    <div>

      <div className='card1box1' >
        <h3>EVT0050</h3>
        <h3>Person Detected</h3>
      </div>

      <div className='card1box2' >
         <div><p>Name</p><p>:</p><p>Female25</p></div>  
         <div><p>Location</p><p>:</p><p>Chennai</p></div>  
         <div><p>Date</p><p>:</p><p>09-jan-23</p></div>  
         <div><p>Time</p><p>:</p><p>13:03:13</p></div>  
      </div>

      <div className='card1box3' ><p>Description:</p></div>
      <div className='card1box4' ><p>Female25 detected at Chennai on 9 january, 2023.</p></div>
    </div>
  )
}

export default Card1