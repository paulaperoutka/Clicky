import React from "react";
// import "./Card.css";

const Card = props => (
  <div className="card">
  	<a onClick={() => props.click(props.name)}>
    	<img src={props.source} alt={props.name} />
    </a>
  </div>
);

export default Card;
