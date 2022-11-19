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
                <Link to='/addtocart' className={Fashiongallery.link}>Add to cart</Link>
                </div>
             </div>
            
             <div className={Fashiongallery.gallery1}>
                  <img src={require('./fashion/girlssweatshirt.jpg')} alt=''/>
                  <div className={Fashiongallery.title}>
                        <span>Girl's Sweatshirt winter season</span>
                        <span>$15</span>
                        <Link to='/addtocart' className={Fashiongallery.link}>Add to cart</Link>
                    </div>
              </div>
           
             <div className={Fashiongallery.gallery1}>
                 <img src={require('./fashion/gloves.jpg')} alt=''/>
                    <div className={Fashiongallery.title}>
                         <span>Winter Gloves for all size</span>
                          <span>$10</span>
                          <Link to='/addtocart' className={Fashiongallery.link}>Add to cart</Link>
                 </div>
               </div>
         
               <div className={Fashiongallery.gallery1}>
                      <img src={require('./fashion/heelsboot.jpg')} alt=''/>
                      <div className={Fashiongallery.title}>
                         <span>Heel boot's for women all height</span>
                        <span>$40</span>
                        <Link to='/addtocart' className={Fashiongallery.link}>Add to cart</Link>
                      </div>
                </div>

                <div className={Fashiongallery.gallery1}>
                  <img src={require('./fashion/boot.jpg')} alt=''/>
                  <div className={Fashiongallery.title}>
                    <span>Timberland Men's White Ledge Mid Waterproof Hiking Boot</span>
                     <span>$20</span>
                     <Link to='/addtocart' className={Fashiongallery.link}>Add to cart</Link>
                  </div>
                </div>
                   
                <div className={Fashiongallery.gallery1}>
                <img src={require('./fashion/suit.jpg')} alt=''/>
              <div className={Fashiongallery.title}>
                   <span>Party suit for men's</span>
                   <span>$50</span>
                   <Link to='/addtocart' className={Fashiongallery.link}>Add to cart</Link>
                </div>
              </div>
                  
              <div className={Fashiongallery.gallery1}>
              <img src={require('./fashion/kurti.jpg')} alt=''/>
              <div className={Fashiongallery.title}>
                <span>Summer kurti for slim women</span>
                <span>$15</span>
                <Link to='/addtocart' className={Fashiongallery.link}>Add to cart</Link>
                </div>
            </div>

            <div className={Fashiongallery.gallery1}>
            <img src={require('./fashion/socks.jpg')} alt=''/>
            <div className={Fashiongallery.title}>
            <span>Socks</span>
            <span>$5</span>
            <Link to='/addtocart' className={Fashiongallery.link}>Add to cart</Link>
            </div>
          </div>    
                
          <div className={Fashiongallery.gallery1}>
          <img src={require('./fashion/swimsuit.jpg')} alt=''/>
          <div className={Fashiongallery.title}>
          <span>Summer suit for girls</span>
          <span>$20</span>
          <Link to='/addtocart' className={Fashiongallery.link}>Add to cart</Link>
          </div>
        </div>    
                
             <div className={Fashiongallery.gallery1}>
                 <img src={require('./fashion/womenleggings.jpg')} alt=''/>
                 <div className={Fashiongallery.title}>
                 <span>Women leggings</span>
                 <span>$10</span>
                 <Link to='/addtocart' className={Fashiongallery.link}>Add to cart</Link>
                 </div>
              </div>

              <div className={Fashiongallery.gallery1}>
              <img src={require('./fashion/winterjacket.jpg')} alt=''/>
              <div className={Fashiongallery.title}>
                <span>Winter Jacket for men</span>
                <span>$30</span>
                <Link to='/addtocart' className={Fashiongallery.link}>Add to cart</Link>
                </div>
            </div>
               
            <div className={Fashiongallery.gallery1}>
            <img src={require('./fashion/watch.jpg')} alt=''/>
            <div className={Fashiongallery.title}>
            <span>Boat Watch for all men</span>
            <span>$35</span>
            <Link to='/addtocart' className={Fashiongallery.link}>Add to cart</Link>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Fashion
 