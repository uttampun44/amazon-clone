import React from 'react';
import Main from './Home.module.css';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Image1 from '../images/headerimg1.jpg';
import Image2 from '../images/headerimg2.jpg';
import Image3 from '../images/headerimg3.jpg';
import Image4 from '../images/headerimg4.jpg';
import Image5 from '../images/headerimg5.jpg';
import Image6 from '../images/headerimg6.jpg';   
import Header from '../Header';
import Product from '../Products/Product';
import Productimage1 from '../images/product images/fitathome.jpg';

import GamingProduct from '../images/product images/headset.jpg';
import GamingProduct1 from '../images/product images/keyboard.png';
import GamingProduct2 from '../images/product images/mouse.png';
import GamingProduct3 from '../images/product images/chair.png';

import Laptop1 from '../images/product images/laptop.png';
import Ps from '../images/product images/ps5.png';
import Mouse from '../images/product images/mouse.png';
import Chair from '../images/product images/chair.png';
function Home() {
  return (
    <div className={Main.mainsection}>
     <Header />
    <main>
      <section className={Main.imagecarousel}>
         <div className={Main.slider}>
         {/*carousel start */}
           <Carousel showThumbs={false} infiniteLoop={true} showStatus={false}>
               <div className={Main.img1}>
               <img src={Image1} alt=''/>
               </div>
               
               <div className={Main.img2}>
               <img src={Image2} alt=''/>
               </div>
                
               <div className={Main.img3}>
               <img src={Image3} alt=''/>
               </div>
             
               <div className={Main.img4}>
               <img src={Image4} alt=''/>
               </div>
 
               <div className={Main.img5}>
               <img src={Image5} alt=''/>
               </div>

               <div className={Main.img6}>
               <img src={Image6} alt=''/>
               </div>
           </Carousel>
         </div>
          {/*carousel end */}
      </section>

      <Product name='Get fit at home'
       image = {Productimage1}
       link = 'Explore now'

       name2 = 'Headset'
       image2 = {GamingProduct}

       name3 = 'Keyboard'
       image3 = {GamingProduct1}

       name4 = 'Mouse'
       image4 = {GamingProduct2}
       
       name5 = 'Chair'
       image5 = {GamingProduct3}

       name6 = 'Laptop'
       image6 = {Laptop1}

       name7 = 'Ps 5'
       image7 = {Ps}

       name8 = 'Computer Mice'
       image8 = {Mouse}

       name9 = 'Chair'
       image9 = {Chair}
      />
    </main>
      
    </div>
  )
}

export default Home
