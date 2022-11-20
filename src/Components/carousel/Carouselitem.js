import React from 'react'
import Carousel from 'better-react-carousel'
import Carousels from './Carousel.module.css';


function Carouselitem() {
  const containerStyle = {
    display: 'flex',
    backgroundColor: 'white',
    width: '100%',
    padding: '1rem'
  }
  return (
    <div>
        <div className={Carousels.carousel}><h4>Best Seller Book</h4></div>
        <Carousel rows={1} cols={12}  loop={true} containerStyle={containerStyle} >
            <Carousel.Item>
                <img src={require('../images/product images/Books/books1.jpg')} alt='src' style={{maxWidth: 'unset'}}/>
            </Carousel.Item>

            <Carousel.Item>
            <img src={require('../images/product images/Books/books2.jpg')} alt='src' style={{maxWidth: 'unset'}}/>
        </Carousel.Item>

        <Carousel.Item>
        <img src={require('../images/product images/Books/books3.jpg')} alt='src' style={{maxWidth: 'unset'}}/>
    </Carousel.Item>

                  <Carousel.Item>
                     <img src={require('../images/product images/Books/books4.jpg')} alt='src' style={{maxWidth: 'unset'}}/>
              </Carousel.Item>

                    <Carousel.Item>
                         <img src={require('../images/product images/Books/books5.jpg')} alt='src' style={{maxWidth: 'unset'}}/>
              </Carousel.Item>

              <Carousel.Item>
             <img src={require('../images/product images/Books/books6.jpg')} alt='src' style={{maxWidth: 'unset'}}/>
               </Carousel.Item>
                        
               <Carousel.Item>
               <img src={require('../images/product images/Books/books7.jpg')} alt='src' style={{maxWidth: 'unset'}}/>
           </Carousel.Item>

           <Carousel.Item>
           <img src={require('../images/product images/Books/books8.jpg')} alt='src' style={{maxWidth: 'unset'}}/>
       </Carousel.Item>  
           
                    <Carousel.Item>
                <img src={require('../images/product images/Books/books9.jpg')} alt='src' style={{maxWidth: 'unset'}}/>
                   </Carousel.Item>
                    
                   <Carousel.Item>
                   <img src={require('../images/product images/Books/books10.jpg')} alt='src' style={{maxWidth: 'unset'}}/>
                      </Carousel.Item>

                      <Carousel.Item>
                      <img src={require('../images/product images/Books/books11.jpg')} alt='src' style={{maxWidth: 'unset'}}/>
                         </Carousel.Item>

                         <Carousel.Item>
                         <img src={require('../images/product images/Books/books21.jpg')} alt='src' style={{maxWidth: 'unset'}}/>
                            </Carousel.Item>

                            <Carousel.Item>
                            <img src={require('../images/product images/Books/books13.jpg')} alt='src' style={{maxWidth: 'unset'}}/>
                               </Carousel.Item>

                               <Carousel.Item>
                               <img src={require('../images/product images/Books/books14.jpg')} alt='src' style={{maxWidth: 'unset'}}/>
                                  </Carousel.Item>

                                  <Carousel.Item>
                                  <img src={require('../images/product images/Books/books15.jpg')} alt='src' style={{maxWidth: 'unset'}}/>
                                     </Carousel.Item>

                            <Carousel.Item>
                            <img src={require('../images/product images/Books/books16.jpg')} alt='src' style={{maxWidth: 'unset'}}/>
                               </Carousel.Item>
        
                               <Carousel.Item>
                               <img src={require('../images/product images/Books/books20.jpg')} alt='src' style={{maxWidth: 'unset'}}/>
                                  </Carousel.Item>

                                  <Carousel.Item>
                                     <img src={require('../images/product images/Books/books18.jpg')} alt='src' style={{maxWidth: 'unset'}}/>
                                     </Carousel.Item>

                                     <Carousel.Item>
                                     <img src={require('../images/product images/Books/books16.jpg')} alt='src' style={{maxWidth: 'unset'}}/>
                                        </Carousel.Item>
                 
                                        <Carousel.Item>
                                        <img src={require('../images/product images/Books/books20.jpg')} alt='src' style={{maxWidth: 'unset'}}/>
                                           </Carousel.Item>
         
                                           <Carousel.Item>
                                              <img src={require('../images/product images/Books/books18.jpg')} alt='src' style={{maxWidth: 'unset'}}/>
                                              </Carousel.Item>

                                              <Carousel.Item>
                                              <img src={require('../images/product images/Books/books9.jpg')} alt='src' style={{maxWidth: 'unset'}}/>
                                                 </Carousel.Item>
                                                  
                                                 <Carousel.Item>
                                                 <img src={require('../images/product images/Books/books10.jpg')} alt='src' style={{maxWidth: 'unset'}}/>
                                                    </Carousel.Item>
                              
                                                    <Carousel.Item>
                                                    <img src={require('../images/product images/Books/books11.jpg')} alt='src' style={{maxWidth: 'unset'}}/>
                                                       </Carousel.Item>
        </Carousel>
    </div>
  )
}
export default Carouselitem
