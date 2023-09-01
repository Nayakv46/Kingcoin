import React from 'react';

import "./whyUsBox.css";


const WhyUsBox = (props) => {

  return (
    <div className="whyBox">
        <div className="whyBox-icon">
            <i className={`fa-solid fa-${props.icon}`}></i>
        </div>

        <div className="whyBox-text">
            <h2>{props.header}</h2>
            <p>{props.paragraph}</p>
        </div>
    </div>
  )
}

export default WhyUsBox