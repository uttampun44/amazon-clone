import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import Header from '../Header.js';
import Footer from '../Footer/Footer'
import { useParams } from 'react-router-dom';

function Addtocart() {

     const productid = useParams();
     console.log(productid);
  return (
    <div>
    <Header />
         <section>
               
                     <div className='flex items-center justify-center h-[500px] gap-5 flex-wrap'>
                              <div>
                                   <img src={require('../images/product images/fitathome.jpg')} alt=''/>
                              </div>

                          <div className='text-center px-5 leading-7 grid gap-y-4 items-center justify-items-center p-[2rem]'>
                              <h10 className='uppercase font-bold text-1xl'>Product details</h10>
                              <p className='text-xl font-normal'>Product Name:<span></span></p>
                              <p className='text-xl font-normal'>Price: <span></span></p>
                              <p className='text-xl font-normal'>Total: <span></span></p>

                              <DeleteIcon />
                         </div>
                     </div>
               
         </section>
         <Footer />
    </div>
  )
}

export default Addtocart
