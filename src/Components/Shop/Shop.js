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
               <Link to='/shop/fashionhome' className={Shops.link}>Fashion</Link>
               <br></br>
               <Link to='/shop/personalcare' className={Shops.link}>Personal care</Link>
               <br></br>
               <Link to='/shop/fitness' className={Shops.link}>Health and beauty</Link>
               <Outlet />
           </div>
     </div>
       <div className={Shops.productgallery}>
            <div className={Shops.gallery}>
               <img src={require('../images/headerimg1.jpg')} alt='' />
            </div>
         <div className={Shops.gallery}>
              <img src={require('../images/headerimg2.jpg')} alt='' />
          </div>

          <div className={Shops.gallery}>
          <img src={require('../images/headerimg3.jpg')} alt='' />
           </div> 

          <div className={Shops.gallery}>
           <img src={require('../images/headerimg4.jpg')} alt='' />
       </div>
                
       <div className={Shops.gallery}>
           <img src={require('../images/headerimg5.jpg')} alt='' />
        </div>        
                   
        <div className={Shops.gallery}>
        <img src={require('../images/headerimg2.jpg')} alt='' />
         </div> 

        </div>
      <Footer />
    </div>
  )
}

export default Shop
