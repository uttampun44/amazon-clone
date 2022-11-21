import React, { useState } from 'react'
import personalcare from './Personalcareproducts'
import Perosnalhome from './Perosnalhome';

function Personal() {
  const [personalitems, setPersonalItems] = useState(personalcare);
   console.log(personalitems)
  return (
    <div>
        <div className='grid grid-cols-3 justify-center align-middle mb-5'>
           {
               personalitems.map((personalcareitems) =>{
                 return <Perosnalhome key={personalcareitems.id} {...personalcareitems}/>
               })
           }
            </div>
    </div>
  )
}

export default Personal
 