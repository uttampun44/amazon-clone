import React from 'react'
import Footers from './Footer.module.css'
import { Link } from 'react-router-dom'
function Footer() {
  return (
    <div>
       <footer>
         <div className={Footers.footerdesign}>
           <div className={Footers.gettoknowus}>
              <h4>Get to know us</h4>
               <Link to='' className={Footers.footerslink}>Carrers</Link>
               <Link to='' className={Footers.footerslink}>Blogs</Link>
               <Link to='' className={Footers.footerslink}>About Amzon</Link>
               <Link to='' className={Footers.footerslink}>Investors relations</Link>
               <Link to='' className={Footers.footerslink}>Amazon device</Link>
               <Link to='' className={Footers.footerslink}>Amazon science</Link>
           </div>

           <div className={Footers.gettoknowus}>
              <h4>Make money with us</h4>
               <Link to='' className={Footers.footerslink}>Sell products on Amamzon</Link>
               <Link to='' className={Footers.footerslink}>Sell on Amamzon Business</Link>
               <Link to='' className={Footers.footerslink}>Sell apps on Amazon</Link>
               <Link to='' className={Footers.footerslink}>Become an affiliate</Link>
               <Link to='' className={Footers.footerslink}>Advertise your products</Link>
               <Link to='' className={Footers.footerslink}>Sell-Publish with us </Link>
               <Link to='' className={Footers.footerslink}>Host an amazon hub</Link>
               <Link to='' className={Footers.footerslink}> See More Make Money with Us</Link>
           </div>

           <div className={Footers.gettoknowus}>
              <h4>Amazon Payment Products</h4>
               <Link to='' className={Footers.footerslink}>Amazon Business Card</Link>
               <Link to='' className={Footers.footerslink}>Shop with Points</Link>
               <Link to='' className={Footers.footerslink}>Reload Your Balance</Link>
               <Link to='' className={Footers.footerslink}>Investors relations</Link>
               <Link to='' className={Footers.footerslink}>Amazon currency converter</Link>
           </div>

           <div className={Footers.gettoknowus}>
           <h4>Let Us Help You</h4>
            <Link to='' className={Footers.footerslink}>Amazon Covid-19</Link>
            <Link to='' className={Footers.footerslink}>Your account</Link>
            <Link to='' className={Footers.footerslink}>Your orders</Link>
            <Link to='' className={Footers.footerslink}>Shipping Rates & Policies</Link>
            <Link to='' className={Footers.footerslink}>Returns & placements</Link>
            <Link to='' className={Footers.footerslink}>Manage your content and device</Link>
            <Link to='' className={Footers.footerslink}>Amazon assitant</Link>
            <Link to='' className={Footers.footerslink}>Help</Link>
        </div>
         </div>
       </footer>
    </div>
  )
}

export default Footer
