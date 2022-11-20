import React from 'react'
import Carousel from 'better-react-carousel'
import Carousels from './Carousel.module.css';

function Gifts() {
    const containerStyle = {
        display: 'flex',
        backgroundColor: 'white',
        width: '100%',
        padding: '1rem'
      }
  return (
    <div>
    <div className={Carousels.carousel}><h4>Shop gifts for everyone on your list</h4></div>
      <Carousel rows={1} cols={12}  loop={true} containerStyle={containerStyle} gap={35} >
        <Carousel.Item>
            <img src={require('../images/gifts/gifts1.jpg')} alt='src' style={{maxWidth: 'unset'}}/>
        </Carousel.Item>

        <Carousel.Item>
        <img src={require('../images/gifts/gifts2.jpg')} alt='src' style={{maxWidth: 'unset'}}/>
        </Carousel.Item>
               
        <Carousel.Item>
        <img src={require('../images/gifts/gifts3.jpg')} alt='src' style={{maxWidth: 'unset'}}/>
        </Carousel.Item>

        <Carousel.Item>
        <img src={require('../images/gifts/gifts4.jpg')} alt='src' style={{maxWidth: 'unset'}}/>
        </Carousel.Item>

        <Carousel.Item>
        <img src={require('../images/gifts/gifts5.jpg')} alt='src' style={{maxWidth: 'unset'}}/>
        </Carousel.Item>

        <Carousel.Item>
        <img src={require('../images/gifts/gifts6.jpg')} alt='src' style={{maxWidth: 'unset'}}/>
        </Carousel.Item>

        <Carousel.Item>
        <img src={require('../images/gifts/gifts7.jpg')} alt='src' style={{maxWidth: 'unset'}}/>
        </Carousel.Item>

        <Carousel.Item>
        <img src={require('../images/gifts/gifts8.jpg')} alt='src' style={{maxWidth: 'unset'}}/>
        </Carousel.Item>

        <Carousel.Item>
        <img src={require('../images/gifts/gifts9.jpg')} alt='src' style={{maxWidth: 'unset'}}/>
        </Carousel.Item>

        <Carousel.Item>
        <img src={require('../images/gifts/gifts10.jpg')} alt='src' style={{maxWidth: 'unset'}}/>
        </Carousel.Item>

        <Carousel.Item>
        <img src={require('../images/gifts/gifts11.jpg')} alt='src' style={{maxWidth: 'unset'}}/>
        </Carousel.Item>
                   
        <Carousel.Item>
        <img src={require('../images/gifts/gifts11.jpg')} alt='src' style={{maxWidth: 'unset'}}/>
        </Carousel.Item>

        <Carousel.Item>
        <img src={require('../images/gifts/gifts11.jpg')} alt='src' style={{maxWidth: 'unset'}}/>
        </Carousel.Item>
    </Carousel>

    
    </div>
  )
}

export default Gifts
