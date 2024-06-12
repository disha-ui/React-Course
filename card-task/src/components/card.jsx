import React from "react";
import "./Card.css";

function card(props) {
  return (
    <div className="card-main">
      <div>
        <img src={props.img} />
      </div>
      <div className="main-container">
        <div className="card-heading">
          <h2>{props.heading}</h2>
        
        </div>
      </div>
  );
}

export default card;
