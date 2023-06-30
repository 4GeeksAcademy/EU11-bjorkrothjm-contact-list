import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light d-flex justify-content-end" style={{margin: "auto",width: "85%"}}>
			<div className="">
				<Link to="/demo">
					<button className="btn btn-success" style={{margin: "10px 0px"}}>Add new contact</button>
				</Link>
			</div>
		</nav>
	);
};
