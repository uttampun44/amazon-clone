import React from 'react'
import { Link } from 'react-router-dom'
function Shophome({id, name, price, images}) {
  return (
    <div>

      <div className='grid-cols-4'>
         <img src={images} alt=''/>
               <div className='gallery'>
     
                <span>{name}</span>
              <span>{price}</span>
               <Link to='/addtocart'>Add to cart</Link>
               </div>
               </div>
    </div>
  )
}

export default Shophome
