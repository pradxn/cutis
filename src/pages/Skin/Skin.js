import React from 'react'
import './Skin.css';

const Skin = () => {
  return (
    <div className="skin-container">
    <div className="skin-item">
        <a href="/cleanser">Cleanser</a>
    </div>
    
    <div className="skin-item">
        <a href="/toner">Toner</a>
    </div>

    <div className="skin-item">
        <a href="/moisturizer">Moisturizer</a>
    </div>

    <div className="skin-item">
        <a href="/serum">Serum</a>
    </div>

    <div className="skin-item">
        <a href="/spf">SPF</a>
    </div>
</div>
  )
}

export default Skin