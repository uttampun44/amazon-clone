import React, { useEffect, useState } from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import Header from '../Header.js';
import Footer from '../Footer/Footer'
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';


function Addtocart() {
     const [items, setItems] = useState([]);
     const [price, setPrice] = useState(0);
     console.log(price);
      console.log(items);

     const {id} = useParams();
     console.log(id);

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
          let price = 0;
            getitems.map((itemprice) =>{
              price = itemprice.price + price
            });
            setPrice(price);
            console.log(price);     
     }

     useEffect(() =>{
        compare();
        pricetotal();
     }, [id]);

  return (
    <div>
    <Header />
         <section>
               
                     <div className='grid items-center justify-center  gap-5 flex-wrap min-h-max p-10'>
                           {
                              getitems.map((itemsdetail) =>{
                                   return(
                                        <div className='grid justify-center items-center'>
                                             
                                          <div>
                                               <img src={itemsdetail.image} alt=''/>
                                            </div>
                                               
                                            <div className='text-center px-5 leading-7 grid gap-y-4 items-center justify-items-center p-[2rem]'>
                                            <h10 className='uppercase font-bold text-1xl'>Product details</h10>
                                            <p className='text-xl font-normal'>Product Name:<span>{itemsdetail.name}</span></p>
                                            <p className='text-xl font-normal'>Price: <span>{itemsdetail.price}</span></p>
                                            <p className='text-xl font-normal'>Total: <span>{itemsdetail.price * itemsdetail.quantity}</span></p>
              
                                            <DeleteIcon />
                                       </div>
                                                  
                                        </div>

                                           
                                   )
                              })
                           }
                     </div>
               
         </section>
         <Footer />
    </div>
  )
}

export default Addtocart
