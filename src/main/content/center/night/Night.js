import React from 'react';
import './Night.css';

function Night() {
  return (
      <div className="night">
          <div className="stars">
              <div className="small-star"></div>
              <div className="large-star"></div>
              <div className="medium-star"></div>
              <div className="small-star"></div>
              <div className="xl-star"></div>
              <div className="medium-star"></div>
              <div className="large-star"></div>
              <div className="small-star"></div>
              <div className="medium-star"></div>
              <div className="small-star"></div>
          </div>

          <div className="shootingStar"></div>

          <div className="moon">
              <div className="moonDot-1"></div>
              <div className="moonDot-2"></div>
          </div>
      </div>
  )
};

export default Night;