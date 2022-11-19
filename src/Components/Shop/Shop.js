import React from 'react'
import Header from '../Header';
import Footer from '../Footer/Footer';
import Shops from './Shop.module.css';
import { Link, Outlet} from 'react-router-dom';

function Shop() {
  return (
    <div>
      <Header />
      <div className={Shops.sidebar}>
           <div className={Shops.Fashion}>
               <Link to='/shop/fashion' className={Shops.link}>Fashion</Link>
               <br></br>
               <Link to='/shop/personalcare' className={Shops.link}>Personal care</Link>
               <br></br>
               <Link to='/shop/fitness' className={Shops.link}>Health and beauty</Link>
               <Outlet />
           </div>
     </div>
     
      <Footer />
    </div>
  )
}

export default Shop
