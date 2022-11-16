import React from 'react'
import Headerlogo from './amazonlogo.png';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Headcss from '../css/Header.module.css';
import '../App.css';
import { Link } from 'react-router-dom';

function Header() {

  return (
    <div className='header'>
        <header>
           <nav>
               <div className={Headcss.amazonlogo}>
                 <img src={Headerlogo} alt=''/>
               </div>

               <div className={Headcss.searchlogo}>
                  <select>
                      <option hidden>All</option>
                      <option>All Departments</option>
                      <option>Arts & Crafts</option>
                      <option>Books</option>
                      <option>Electronics</option>
                      <option>Men's Fashion</option>
                      <option>Women's Fashion</option>
                      <option>Computers</option>
                      <option>Toys & Video Games</option>
                  </select>
                  <input type='text'/>
              <SearchIcon style={{backgroundColor: '#fcbb6a', width:'50px', height: '35px', borderRadius: '0px 8px 8px 0px' }}></SearchIcon>
               </div>
               <div className={Headcss.cart}>
                 <div className={Headcss.language}>
                   <a href='#english'>English</a>
                 </div>
                <div className={Headcss.signin}>
                 <a href='#signin'>Hello, Signin <br></br><span>Account & Lists</span></a>
                </div>
                <div className={Headcss.returnandorder}>
                  <a href='#returns'>Returns<br></br><span>&Orders</span></a>
                </div>
                <div className={Headcss.cartlogo}>
                  <ShoppingCartIcon style={{color: 'white'}}></ShoppingCartIcon>
                  <span>0</span>
                  <div className={Headcss.cartitems}>
                  <span>cart</span>
                  </div>
                </div>
        
               </div>
           </nav> 
           <div className={Headcss.secondnav}>
              <div className={Headcss.secondnavitems}>
              <Link to=''  className={Headcss.dealslink}>All</Link>
                <Link to=''  className={Headcss.dealslink}>Today's Deals</Link>
                <Link to=''  className={Headcss.dealslink}>12 Day's of Deals</Link>
                <Link to=''  className={Headcss.dealslink}>Customer Service</Link>
                <Link to=''  className={Headcss.dealslink}>Registery</Link>
                <Link to=''  className={Headcss.dealslink}>Gift Cards</Link>
                <Link to=''  className={Headcss.dealslink}>Sell</Link>
                <Link to=''  className={Headcss.dealslink}>Pharmacy</Link>
                <Link to=''  className={Headcss.dealslink}>Customer Service</Link>
                <Link to=''  className={Headcss.dealslink}>Kindle Books</Link>
                <Link to=''  className={Headcss.dealslink}>Fashion</Link>
              </div>
              <div className={Headcss.shopdealsinelectronics}>
               <Link to='/'  className={Headcss.dealslink}>Shop Deals in electronics</Link>
              </div>
           </div>
        </header>
    </div>
  )
}

export default Header
