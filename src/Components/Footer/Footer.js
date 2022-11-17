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
               <Link to='' className={Footers.footerslink}>Carrers</Link>
               <Link to='' className={Footers.footerslink}>Blogs</Link>
               <Link to='' className={Footers.footerslink}>About Amzon</Link>
               <Link to='' className={Footers.footerslink}>Investors relations</Link>
               <Link to='' className={Footers.footerslink}>Amazon device</Link>
               <Link to='' className={Footers.footerslink}>Amazon science</Link>
           </div>

           <div className={Footers.gettoknowus}>
              <h4>Amazon Payment Products</h4>
               <Link to='' className={Footers.footerslink}>Carrers</Link>
               <Link to='' className={Footers.footerslink}>Blogs</Link>
               <Link to='' className={Footers.footerslink}>About Amzon</Link>
               <Link to='' className={Footers.footerslink}>Investors relations</Link>
               <Link to='' className={Footers.footerslink}>Amazon device</Link>
               <Link to='' className={Footers.footerslink}>Amazon science</Link>
           </div>

           <div className={Footers.gettoknowus}>
           <h4>Let Us Help You</h4>
            <Link to='' className={Footers.footerslink}>Carrers</Link>
            <Link to='' className={Footers.footerslink}>Blogs</Link>
            <Link to='' className={Footers.footerslink}>About Amzon</Link>
            <Link to='' className={Footers.footerslink}>Investors relations</Link>
            <Link to='' className={Footers.footerslink}>Amazon device</Link>
            <Link to='' className={Footers.footerslink}>Amazon science</Link>
        </div>
         </div>
       </footer>
    </div>
  )
}

export default Footer
