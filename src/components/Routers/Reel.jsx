import React, { useEffect, useState } from 'react';
import "./Reel.css";
import { Model1, Model2 } from '../Data';


const Reel = () => {
    const Data =[...Model1, ...Model2]
    console.log(Data.title)

  return (
    <div className='reels'>
    <div className="reelBox">
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

export default Reel;


