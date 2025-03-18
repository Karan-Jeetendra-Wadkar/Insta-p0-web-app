import React from 'react';
import "./Explore.css";
import { Model1, Model2 } from '../Data';


const Explore = () => {

  const Data =[...Model1, ...Model2]
  console.log(Data.title)
  return (
    <div className='explore'>
      <div className="exploreBox">
          {
            Data.map((item)=>{
              return(
                <div>
                    <img className="Boxes" src={item.img} />
                  
                
                
                </div>
              )
            })
}
</div>
      
    </div>
  )
}

export default Explore
