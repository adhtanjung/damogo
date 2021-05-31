import React from "react";
import "../styles/navbar.scss";
import logo from "../assets/damogo-removebg-preview.png";

function NavBar() {
	return (
		<div className="headerContainer">
			<div className="header">
				<div>
					<img src={logo} alt="something went wrong" width="150px" />
				</div>
				<div className="right">
					<div className="navbarLink">Beranda</div>
					<div className="navbarLink">Restaurant</div>
					<div className="navbarLink">Supplier</div>
				</div>
			</div>
		</div>
	);
}

export default NavBar;
