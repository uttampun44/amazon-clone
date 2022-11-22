import React, { useState } from 'react'
import Fashiongallery from '../Fashion/Fashion.module.css';
import { Link } from 'react-router-dom';


function FashionHome({id, image, name, price}) {
  const [itemsdetails, setDetails] = useState(id, image, name, price)

  const Addtocart = () =>{
   setDetails([...itemsdetails]);
 
  }
  return (
    <div>
           <div className={Fashiongallery.gallery}>
             <div className={Fashiongallery.gallery1}>
               <img src={image} alt=''/>
                <div className={Fashiongallery.title}>
                
                <span>{name}</span>
                <span>{price}</span>
                <Link to='/addtocart' className={Fashiongallery.link} onClick={Addtocart}>Add to cart</Link>
                </div>
             </div>
            
        </div>
    </div>
  )
}

export default FashionHome
    