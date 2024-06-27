import React from 'react';
import './style.css';
import LeftCard from './Components/LeftCard.js';
import MiddleCard from './Components/MiddleCard.js';
import RightCard from './Components/RightCard.js';

export default function App() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <LeftCard />
          </div>
          <div className="col-lg-4">
            <MiddleCard />
          </div>
          <div className="col-lg-4">
            <RightCard />
          </div>
        </div>
      </div>
    </>
  );
}
