import React, { useEffect } from 'react'
import { useState } from 'react';
import { Squash as Hamburger } from 'hamburger-react'


function Nav() {
    let [state,setState] = useState(false)
    let [transform,setTransform] = useState(100)
   

    useEffect(()=>{
      if (state == true)  {
        setTransform(0)
      }
      if ( state == false) {
        setTransform(100)
      }
    },[state])

  return (
    <div className="nav">
        <div className="navContent"> 
          <div className="container" style={{transform: `translateX(-${transform}%)`}}>
            <div className="hamburger">
              <Hamburger toggled={state} toggle={setState} size={32} color='white' />
            </div>
          </div>
        </div>
        <div className="navOptions">

        </div>
    </div>
  )
}

export default Nav