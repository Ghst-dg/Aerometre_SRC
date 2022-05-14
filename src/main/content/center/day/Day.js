import React from 'react';
import "./Day.css";

const Day = () => {
  return (
      <div className="day">
          <div className="cloud-1">
              <div className="part-1">
                  <div className="circle-1"></div>
                  <div className="circle-2"></div>
              </div>
              <div className="part-2"></div>
          </div>
          <div className="cloud-2">
              <div className="part-1">
                  <div className="circle-1"></div>
                  <div className="circle-2"></div>
              </div>
              <div className="part-2"></div>
          </div>

          <div className="circle">
              <div className="dot"></div>
          </div>
          <div className="sun"></div>
        </div>
  )
};

export default Day;