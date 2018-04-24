import React from "react";
// import "./Navbar.css";

const Navbar = props => {
	<nav className="navbar navbar-light bg-light">
		<span class="navbar-brand mb-0 h1">Minion Click</span>
		<span class="navbar-text">{props.message}</span>
		<span class="navbar-text">
			Score: <span>{props.score}</span> | 
      Top Score: <span>{props.topScore}</span>
		</span>
	</nav>
}

export default Navbar; 