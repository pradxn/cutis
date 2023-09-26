import React from 'react';
import './Hair.css';

const Hair = () => {
  return (
    <div className="hair-container">
        <div className="hair-item">
            <a href="/hair-oils">Hair Oils</a>
        </div>
        
        <div className="hair-item">
            <a href="/shampoo">Shampoo</a>
        </div>

        <div className="hair-item">
            <a href="/conditioner">Conditioner</a>
        </div>
    </div>
  );
};

export default Hair;
