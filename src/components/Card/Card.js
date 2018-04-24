import React from "react";
// import "./Card.css";

const Card = props => (
  <div className="card">
    <img src={props.source} alt={props.name} />
  </div>
);

export default Card;