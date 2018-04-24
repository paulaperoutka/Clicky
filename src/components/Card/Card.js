import React from "react";
// import "./Card.css";

const Card = props => (
	<div className="card" style="width: 18rem;">
  	<img className="card-img" src={props.source} alt={props.name}>
	</div>
);

export default Card;

// onClick={() => props.clickImage(props.name)}