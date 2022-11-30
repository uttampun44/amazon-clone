import React, { useEffect, useState } from 'react'
import Header from '../Header.js';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Delete } from '../../redux/Action.js';


function Addtocart() {

     const [items, setItems] = useState([]);
     const [price, setPrice] = useState(0);
     console.log(price);
      console.log(items);

     const {id} = useParams();

     const getitems = useSelector((state) => state.cartreducer.carts);
   
//    comparing the id from url
     const compare = () =>{
          let comparedata = getitems.filter((e) =>{
               return e.id === id;
          });
          setItems(comparedata);

     }
    
//    total price function
     const pricetotal = () =>{
          let price;
            getitems.map((itemprice) =>{
             return price = itemprice.price + price
            });
            setPrice(price);
            console.log(price);     
     }

     useEffect(() =>{
        compare();
     }, [id]);
    
     useEffect(() =>{
          pricetotal()
     }, [price])

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
                              getitems.map((itemsdetail) =>{
                                   return(
                                        <div className='flex justify-center items-center'>
                                             
                                          <div>
                                               <img src={itemsdetail.image} alt='' style={{width:'200px', objectFit: 'fill'}}/>
                                            </div>
                                               
                                            <div className='text-center px-5 leading-7 grid gap-y-4 items-center justify-items-center p-[2rem]'>
                                            <h10 className='uppercase font-bold text-2xl'>Product details</h10>
                                            <p className='text-xl font-normal max-w-fit'>Product Name:<span>{itemsdetail.name}</span></p>
                                            <p className='text-xl font-normal'>Price: <span>{itemsdetail.price}</span></p>
                                         
                                           <button className='bg-yellow-500 p-4 font-sans font-medium text-base rounded-md border-2 border-amber-50 text-white' onClick={() => deletebasket(itemsdetail.id)}>Remove from Basket</button>
                                       </div>
                                                  
                                        </div>

                                           
                                   )
                              })
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
