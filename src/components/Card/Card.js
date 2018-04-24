import React from "react";
// import "./Card.css";

const Card = props => (
	<div className="card" style="width: 18rem;">
  	<img className="card-img" src={props.source} alt={props.name}">
	</div>
);

export default Card;

 <img src={props.src} alt={props.name} className="img-thumbnail clickable-images" onClick={() => props.pickImg(props.name)} />