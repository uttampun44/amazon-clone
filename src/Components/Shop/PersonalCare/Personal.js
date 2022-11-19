import React from 'react'
import Personalcare from './Personal.module.css'
function Personal() {
  return (
    <div>
        <div className={Personalcare.gallery}>
             <div className={Personalcare.gallery1}>
                  <img src={require('../PersonalCare/healthcare/brush.jpg')} alt=''/>
               </div>
                
             <div className={Personalcare.gallery1}>
                  <img src={require('../PersonalCare/healthcare/cerave.jpg')} alt=''/>
               </div>
                
             <div className={Personalcare.gallery1}>
             <img src={require('../PersonalCare/healthcare/dove.jpg')} alt=''/>
               </div>
                  
               <div className={Personalcare.gallery1}>
             <img src={require('../PersonalCare/healthcare/razor.jpg')} alt=''/>
               </div>

               <div className={Personalcare.gallery1}>
                   <img src={require('../PersonalCare/healthcare/therabee.jpg')} alt=''/>
               </div>
                  
               <div className={Personalcare.gallery1}>
               <img src={require('../PersonalCare/healthcare/brush.jpg')} alt=''/>
            </div>
             
          <div className={Personalcare.gallery1}>
               <img src={require('../PersonalCare/healthcare/cerave.jpg')} alt=''/>
            </div>
             
          <div className={Personalcare.gallery1}>
          <img src={require('../PersonalCare/healthcare/dove.jpg')} alt=''/>
            </div>
               
            <div className={Personalcare.gallery1}>
          <img src={require('../PersonalCare/healthcare/razor.jpg')} alt=''/>
            </div>

            <div className={Personalcare.gallery1}>
          <img src={require('../PersonalCare/healthcare/therabee.jpg')} alt=''/>
            </div>
          </div> 
    </div>
  )
}

export default Personal
 