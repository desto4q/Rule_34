import React from 'react'
import { Link } from 'react-router-dom'

function Card({img,title}) {
  return (
    <Link className='card'>
        <img src={img} alt="" />
        <div className="info">
            
        </div>
    </Link>
  )
}

export default Card