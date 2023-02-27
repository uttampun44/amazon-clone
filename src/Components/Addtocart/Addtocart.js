import React, { useEffect, useState } from 'react'
import Header from '../Header.js';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {Delete } from '../../redux/Action.js';


function Addtocart() {

     const [price, setPrice] = useState(0);



     const getitems = useSelector((state) => state.cartreducer.carts);
   

    
//    total price function
     const pricetotal = () =>{
          let productprice = 0;
            getitems.map((itemprice) =>{
              productprice = itemprice.price + productprice;
              console.log(productprice);
            });
            
            setPrice(productprice); 
     }

    
     useEffect(() =>{
          pricetotal();
     }, [pricetotal])

     const deletebasketitem  = useDispatch()
   

     // delete basket function 
   const deletebasket = (id) =>{
     deletebasketitem(Delete(id));
    console.log(`Hello world`);        
   }
  
  return (
    <div>
    <Header />
         <section>
               
                     <div className='grid items-center  gap-5 flex-wrap min-h-max p-10 justify-start'>
                          {
                              getitems.length === 0 ?(
                                     <div>
                                        <p className='text-center'>You cart items is empty</p>
                                     </div>
                              ):(
                                 <div>
                                     <div style={{marginBottom: '20px'}}>
                                     <p>Your items is:</p>
                                     </div>
                                     <div>
                                        {
                                             getitems.map((cartitems) =>{
                                                 return(
                                                     <div key={cartitems.id}>
                                                          <img src={cartitems.image}/>
                                                          <p>{cartitems.price}</p>
                                                          <button onClick={() => deletebasket(cartitems.id)} style={{backgroundColor: 'rgb(252, 187, 106)', fontWeight: 'bold', padding: '5px 10px', borderRadius: '5px'}}>Remove From Basket</button>
                                                     <div style={{display: 'flex', marginTop: '20px', gap: '10px'}}>
                                                        <button style={{backgroundColor: 'rgb(252, 187, 106)', fontWeight: 'bold', padding: '5px 10px', borderRadius: '5px'}}>+</button><button style={{backgroundColor: 'rgb(252, 187, 106)', fontWeight: 'bold', padding: '5px 10px', borderRadius: '5px'}}>-</button> 
                                                     </div>
                                                     </div>
                                                 )
                                             })
                                        }
                                     </div>
                                 </div>
                              )
                           }
                     </div>
                <div className='flex relative left-[255px]'> 
                <p className='text-xl font-normal'>Total: <span>{price}</span></p> 
                </div>
         </section>
    
    </div>
  )
}

export default Addtocart
