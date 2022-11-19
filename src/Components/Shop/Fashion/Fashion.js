import React from 'react'
import { Link } from 'react-router-dom'
import Fashiongallery from '../Fashion/Fashion.module.css'
function Fashion() {
  return (
    <div>
       
        <div className={Fashiongallery.gallery}>
             <div className={Fashiongallery.gallery1}>
               <img src={require('./fashion/boot.jpg')} alt=''/>
                <div className={Fashiongallery.title}>
                <span>Timberland Men's White Ledge Mid Waterproof Hiking Boot</span>
                <span>$20</span>
                <Link to='/'>Add to cart</Link>
                </div>
             </div>
            
             <div className={Fashiongallery.gallery1}>
                  <img src={require('./fashion/girlssweatshirt.jpg')} alt=''/>
                  <div className={Fashiongallery.title}>
                        <span>Timberland Men's White Ledge Mid Waterproof Hiking Boot</span>
                        <span>$20</span>
                        <Link to='/'>Add to cart</Link>
                    </div>
              </div>
           
             <div className={Fashiongallery.gallery1}>
                 <img src={require('./fashion/gloves.jpg')} alt=''/>
                    <div className={Fashiongallery.title}>
                         <span>Timberland Men's White Ledge Mid Waterproof Hiking Boot</span>
                          <span>$20</span>
                          <Link to='/'>Add to cart</Link>
                 </div>
               </div>
         
               <div className={Fashiongallery.gallery1}>
                      <img src={require('./fashion/heelsboot.jpg')} alt=''/>
                      <div className={Fashiongallery.title}>
                         <span>Timberland Men's White Ledge Mid Waterproof Hiking Boot</span>
                        <span>$20</span>
                        <Link to='/'>Add to cart</Link>
                      </div>
                </div>

                <div className={Fashiongallery.gallery1}>
                  <img src={require('./fashion/boot.jpg')} alt=''/>
                  <div className={Fashiongallery.title}>
                    <span>Timberland Men's White Ledge Mid Waterproof Hiking Boot</span>
                     <span>$20</span>
                     <Link to='/'>Add to cart</Link>
                  </div>
                </div>
                   
                <div className={Fashiongallery.gallery1}>
                <img src={require('./fashion/suit.jpg')} alt=''/>
              <div className={Fashiongallery.title}>
                   <span>Timberland Men's White Ledge Mid Waterproof Hiking Boot</span>
                   <span>$20</span>
                   <Link to='/'>Add to cart</Link>
                </div>
              </div>
                  
              <div className={Fashiongallery.gallery1}>
              <img src={require('./fashion/kurti.jpg')} alt=''/>
              <div className={Fashiongallery.title}>
                <span>Timberland Men's White Ledge Mid Waterproof Hiking Boot</span>
                <span>$20</span>
                <Link to='/'>Add to cart</Link>
                </div>
            </div>

            <div className={Fashiongallery.gallery1}>
            <img src={require('./fashion/socks.jpg')} alt=''/>
            <div className={Fashiongallery.title}>
            <span>Timberland Men's White Ledge Mid Waterproof Hiking Boot</span>
            <span>$20</span>
            <Link to='/'>Add to cart</Link>
            </div>
          </div>    
                
          <div className={Fashiongallery.gallery1}>
          <img src={require('./fashion/swimsuit.jpg')} alt=''/>
          <div className={Fashiongallery.title}>
          <span>Timberland Men's White Ledge Mid Waterproof Hiking Boot</span>
          <span>$20</span>
          <Link to='/'>Add to cart</Link>
          </div>
        </div>    
                
             <div className={Fashiongallery.gallery1}>
                 <img src={require('./fashion/womenleggings.jpg')} alt=''/>
                 <div className={Fashiongallery.title}>
                 <span>Timberland Men's White Ledge Mid Waterproof Hiking Boot</span>
                 <span>$20</span>
                 <Link to='/'>Add to cart</Link>
                 </div>
              </div>

              <div className={Fashiongallery.gallery1}>
              <img src={require('./fashion/winterjacket.jpg')} alt=''/>
              <div className={Fashiongallery.title}>
                <span>Timberland Men's White Ledge Mid Waterproof Hiking Boot</span>
                <span>$20</span>
                <Link to='/'>Add to cart</Link>
                </div>
            </div>
               
            <div className={Fashiongallery.gallery1}>
            <img src={require('./fashion/watch.jpg')} alt=''/>
            <div className={Fashiongallery.title}>
            <span>Timberland Men's White Ledge Mid Waterproof Hiking Boot</span>
            <span>$20</span>
            <Link to='/'>Add to cart</Link>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Fashion
 