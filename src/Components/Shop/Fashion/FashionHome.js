import React, { useState } from 'react'
import Fashiongallery from '../Fashion/Fashion.module.css';
import { useNavigate } from 'react-router-dom';
import Fashionitems from './Fashionproducts'
import { useDispatch } from 'react-redux';
import { Add } from '../../../redux/Action';

function FashionHome() {
  const [itemsdetails, setDetails] = useState(Fashionitems)
   console.log(itemsdetails)
   
   const dispatch = useDispatch();

   const navigate = useNavigate();

   const  Addtocart = (e) =>{
     console.log(e);
     console.log("Hello");
     dispatch(Add(e));

     navigate(`/addtocart/${e.id}`)
   }
  return (
    <div>
           <div className={Fashiongallery.gallery}>
             {
                itemsdetails.map((product) =>{
                  return(
                 
                      <div className={Fashiongallery.gallery1} key={product.id}>
                          <img src={product.image} alt=''/>
                           <div className={Fashiongallery.title}>
                     
                             <span>{product.name}</span>
                             <span>{product.price}</span>
                             <button  className={Fashiongallery.link} onClick={()=>Addtocart(product)} >Add to cart</button>
                           
                        </div>
                      </div>
                      
                  )
                })
             }
         
            
        </div>
    </div>
  )
}

export default FashionHome
    