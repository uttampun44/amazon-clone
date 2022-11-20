import React from 'react'
import Fashiongallery from '../Fashion/Fashion.module.css';
import { Link } from 'react-router-dom';
function FashionHome({id, image, name, price}) {
  return (
    <div>
           <div className={Fashiongallery.gallery}>
             <div className={Fashiongallery.gallery1}>
               <img src={image} alt=''/>
                <div className={Fashiongallery.title}>
                
                <span>{name}</span>
                <span>{price}</span>
                <Link to='/addtocart' className={Fashiongallery.link}>Add to cart</Link>
                </div>
             </div>
            
        </div>
    </div>
  )
}

export default FashionHome
    