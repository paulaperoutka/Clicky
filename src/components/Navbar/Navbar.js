import React from "react";
// import "./Navbar.css";

const Navbar = props => (
	<nav className="navbar navbar-light bg-light">
		<span className="navbar-brand mb-0 h1">Minion Click</span>
		<span className="navbar-text text-center">{props.message}</span>
		<span className="navbar-text">
			Score: <span>{props.score}</span> | 
      Top Score: <span>{props.topScore}</span>
		</span>
	</nav>
)

export default Navbar; 