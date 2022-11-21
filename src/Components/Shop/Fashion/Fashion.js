
import { useState } from "react"
import FashionHome from "./FashionHome"
import Fashionsingleproduct from './Fashionproducts'
import fashiongallery from './Fashionhome.module.css'
function Fashion() {
  const [itemdetails] = useState(Fashionsingleproduct);

  return (
    <div>
  
       <div className={fashiongallery.fashiongallery}>
       {
        itemdetails.map((productitems) =>{
          return<FashionHome key={productitems.id} {...productitems}/>
        })
       }
       </div>
    </div>
  )
}

export default Fashion
 