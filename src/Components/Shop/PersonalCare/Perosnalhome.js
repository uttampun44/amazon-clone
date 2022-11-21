import React from 'react'
import Personalcss from './Personal.module.css'
function Perosnalhome({id, name, price, image}) {
  return (
    <div>
          <div className='grid justify-center align-middle '>
              <img src={image} alt='' className={Personalcss.gallery1}/>

              <div className='grid'>
                  <p className={Personalcss.title}>{name}</p>
                  <p className={Personalcss.rate}>{price}</p>
              </div>
          </div>
    </div>
  )
}

export default Perosnalhome
