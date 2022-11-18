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
import Image7 from '../images/headerimg7.jpg';

import GamingProduct from '../images/product images/headset.jpg';
import GamingProduct1 from '../images/product images/keyboard.png';
import GamingProduct2 from '../images/product images/mouse.png';
import GamingProduct3 from '../images/product images/chair.png';

import Laptop1 from '../images/product images/laptop.png';
import Ps from '../images/product images/ps5.png';
import Mouse from '../images/product images/mouse.png';
import Chair from '../images/product images/chair.png';
import Dress from '../images/product images/Dresses.jpg';
import PersonalHealth from '../images/product images/personal healthcare.jpg';
import Kitchen from '../images/product images/kitchen.jpg';
import Computers from '../images/product images/computers.jpg';
import Personalcare from '../images/product images/personalcare.jpg';
import Homeimprovement from '../images/product images/homeimprovement.jpg';
import Under$10 from '../images/product images/under$10.jpg';
import Footer from '../Footer/Footer';
import Carouselsitem from '../carousel/Carouselitem';
import Gifts from '../carousel/Gifts';
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
               <img src={Image7} alt=''/>
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

               <div className={Main.img7}>
               <img src={Image1} alt=''/>
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

       name10 = 'Dresses'
       image10 = {Dress}
       link10 = 'Shop now'

       name11 = 'Personal Healthcare'
       image11 = {PersonalHealth}
       link11 = 'Shop now'
      
       name12 = 'Kitchen'
      image12 = {Kitchen}

      name13 = 'Computers & more'
      image13 = {Computers}

      name14 = 'Personal Care'
      image14 = {Personalcare}

      name15 = 'Home Improvement'
      image15 = {Homeimprovement}
     
      name16 = 'Gift Under $10'
      image16 = {Under$10}

      />
      <section className={Main.carouselitem}>
          <div className={Main.childcarousel}>
          <Carouselsitem />
          </div>

          <div className={Main.childcarousel}>
          <Gifts />
          </div>
      </section>
    </main>
      <Footer />
    </div>
  )
}

export default Home
