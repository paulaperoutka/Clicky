import React from "react";
// import "./Navbar.css";

const Navbar = (props) => (
	<nav className="navbar navbar-dark bg-dark">
		<span className="navbar-brand mb-0 h1">React + Memory</span>
		<span className="navbar-text text-center minion-message">{props.message}</span>
		<span className="navbar-text minion-score">
			Score: <span>{props.score} | </span> 
      Top Score: <span>{props.topScore}</span>
		</span>
	</nav>
)

export default Navbar; 