import React from 'react';
import { v4 as uuidv4 } from 'uuid';

const Rating = ({value}) => {
    return (
        <>
          {[1,2,3,4,5].map((rate) =>(
              <span key={uuidv4()}>
                <i className={ value >= rate ? "fas fa-star" : "far fa-star"

                }>

                </i>

              </span>

          ))}  
        </>
    );
}

export default Rating;
