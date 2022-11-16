import React from 'react'
import { Link } from 'react-router-dom'
import Items from './Product.module.css'
import BoxBasket from '../images/product images/product basket image.jpg';
function Product(props) {
  return (
    <div className={Items.shop}>
    <section className='shop-section'>
    <div className={Items.shopgrid}>
        <div className={Items.category}>
        <h1>{props.name}</h1>
         <div className={Items.fitimage}>
         <img src={props.image} alt=""/>
         </div>
         <Link path='/' style={{fontFamily: 'var(--main-font)', fontWeight: '500', textDecoration: 'none', color:'#007185', lineHeight: '2'}}>{props.link}</Link>
        </div>
         
        <div className={Items.category}>
          <h1>Gaming Accessories</h1>
            <div className={Items.shopbycategory}>

                <div className={Items.computerscategory}>
                <img src={props.image2} alt=""/>
                <span>{props.name2}</span>
                </div>
                
                <div className={Items.computerscategory}>
                <img src={props.image3} alt=""/>
                <span>{props.name3}</span>
                </div>

                <div className={Items.computerscategory} style={{display: 'inline-grid'}}>
                <img src={props.image4} alt=""/>
                <span>{props.name4}</span>
                </div>
                     
                <div className={Items.computerscategory} style={{display:'grid'}}>
                <img src={props.image5} alt=""/>
                <span>{props.name5}</span>
                </div>
                <Link to='/' style={{fontFamily: 'var(--main-font)', fontWeight: '500', textDecoration: 'none', color:'#007185', lineHeight: '2', paddingTop: '2rem'}}>See more</Link>
            </div> 
        </div>



        <div className={Items.category}>
          <h1>Shop by category</h1>
            <div className={Items.shopbycategory}>

                <div className={Items.computerscategory} style={{display:'grid'}}>
                <img src={props.image6} alt=""/>
                <span>{props.name6}</span>
                </div>
                
                <div className={Items.computerscategory}>
                <img src={props.image7} alt="" style={{width:'180px', objectFit: 'fill'}}/>
                <span>{props.name7}</span>
                </div>

                <div className={Items.computerscategory}>
                <img src={props.image8} alt=""/>
                <span>{props.name8}</span>
                </div>
                     
                <div className={Items.computerscategory} style={{display: 'grid'}}>
                <img src={props.image9} alt=""/>
                <span>{props.name9}</span>
                </div>
                <Link to='/' style={{fontFamily: 'var(--main-font)', fontWeight: '500', textDecoration: 'none', color:'#007185', lineHeight: '2', paddingTop: '2rem'}}>See more</Link>
            </div> 
        </div>

        <div className={Items.boxbasket}>
            <div className={Items.basketheading}>
            <h1>Sign in for the best experience</h1>
            <button>Call Now</button>
            </div>
           <div className={Items.basketimage}>
           <img src={BoxBasket} alt=''/>
           </div>
          
        </div>

        <div className={Items.category}>
        <h1>{props.name10}</h1>
         <div className={Items.fitimage}>
         <img src={props.image10} alt=""/>
         </div>
         <Link path='/' style={{fontFamily: 'var(--main-font)', fontWeight: '500', textDecoration: 'none', color:'#007185', lineHeight: '2'}}>{props.link10}</Link>
        </div>

        <div className={Items.category}>
        <h1>{props.name11}</h1>
         <div className={Items.fitimage}>
         <img src={props.image11} alt=""/>
         </div>
         <Link path='/' style={{fontFamily: 'var(--main-font)', fontWeight: '500', textDecoration: 'none', color:'#007185', lineHeight: '2'}}>{props.link11}</Link>
        </div>

        <div className={Items.category}>
        <h1>Early Black Friday deals are here</h1>
          <div className={Items.shopbycategory}>

              <div className={Items.computerscategory} style={{display:'grid'}}>
              <img src={props.image12} alt=""/>
              <span>{props.name12}</span>
              </div>
              
              <div className={Items.computerscategory}>
              <img src={props.image13} alt="" style={{width:'180px', objectFit: 'fill'}}/>
              <span>{props.name13}</span>
              </div>

              <div className={Items.computerscategory}>
              <img src={props.image14} alt=""/>
              <span>{props.name14}</span>
              </div>
                   
              <div className={Items.computerscategory} style={{display: 'grid'}}>
              <img src={props.image15} alt=""/>
              <span>{props.name15}</span>
              </div>
              <Link to='/' style={{fontFamily: 'var(--main-font)', fontWeight: '500', textDecoration: 'none', color:'#007185', lineHeight: '2', paddingTop: '2rem'}}>See more</Link>
          </div> 
      </div>

      <div className={Items.category}>
      <h1>{props.name16}</h1>
       <div className={Items.fitimage}>
       <img src={props.image16} alt=""/>
       </div>
       <Link path='/' style={{fontFamily: 'var(--main-font)', fontWeight: '500', textDecoration: 'none', color:'#007185', lineHeight: '2'}}>{props.link11}</Link>
      </div>
    </div>
</section>
    </div>
  )
}

export default Product
