import React from "react";
import {Image} from "react-bootstrap";
// import "./Card.css";

const Card = props => (
  <div className="minion col-xs-12 well">
  	<a onClick={() => props.click(props.name)}>
    	<Image src={props.source} alt={props.name} thumbnail/>
    </a>
  </div>
);

export default Card;
