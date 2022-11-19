import React from 'react'
import { Link } from 'react-router-dom';
import Fitnessgallery from './Fitness.module.css';
function Fitness() {
  return (
    <div>
         <div className={Fitnessgallery.gallery}>
                <div className={Fitnessgallery.gallery1}>
                 <img src={require('./gymaccessories/dumbbell.jpg')} alt=''/>
                  <div className={Fitnessgallery.title}>
                  <span>Dumbell Pair 2kg sets</span>
                  <span>$35</span>
                  <Link to='/addtocart'>Add to cart</Link>
                  </div>
                  </div>

                   <div className={Fitnessgallery.gallery1}>
                   <img src={require('./gymaccessories/legpull.jpg')} alt=''/>
                    </div>

                    <div className={Fitnessgallery.gallery1}>
                    <img src={require('./gymaccessories/mat.jpg')} alt=''/>
                     </div>

                  <div className={Fitnessgallery.gallery1}>
                     <img src={require('./gymaccessories/minicyclepaddle.jpg')} alt=''/>
                   </div>
                      
                <div className={Fitnessgallery.gallery1}>
                      <img src={require('./gymaccessories/romanchair.jpg')} alt=''/>
                   </div>

                <div className={Fitnessgallery.gallery1}>
                       <img src={require('./gymaccessories/trainningbench.jpg')} alt=''/>
                  </div>

                  <div className={Fitnessgallery.gallery1}>
                      <img src={require('./gymaccessories/twistbar.jpg')} alt=''/>
                   </div>
         </div>
    </div>
  )
}

export default Fitness
