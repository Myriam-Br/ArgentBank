import React from "react";

function ContainerHome({image, title, paragraph}) {
    return <div className="feature-item">
    <img src= {image} alt="Chat Icon" className="feature-icon" />
    <h3 className="feature-item-title">{title}</h3>
    <p>{paragraph}</p>
  </div>
}

export default ContainerHome