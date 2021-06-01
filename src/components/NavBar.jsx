import React, { useEffect } from "react";
import "../styles/navbar.scss";
import logo from "../assets/damogo-removebg-preview.png";
import { Link } from "react-router-dom";

function NavBar() {
	const handleScroll = () => {
		if (window.scrollY > 20) {
			document.querySelector(".headerContainer").className =
				"headerContainer scroll";
		} else {
			document.querySelector(".headerContainer").className = "headerContainer";
		}
	};
	useEffect(() => {
		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);
	return (
		<div className="headerContainer scroll" id="navbar">
			<div className="header">
				<div>
					<img src={logo} alt="something went wrong" width="150px" />
				</div>
				<div className="right">
					<div
						className="navbarLink"
						onClick={() =>
							document.getElementById("first-fold").scrollIntoView()
						}
					>
						Beranda
					</div>

					<div
						className="navbarLink"
						onClick={() =>
							document.getElementById("resto-fold").scrollIntoView()
						}
					>
						Restaurant
					</div>
					<div
						className="navbarLink"
						onClick={() =>
							document.getElementById("supplier-fold").scrollIntoView()
						}
					>
						Supplier
					</div>
				</div>
			</div>
		</div>
	);
}

export default NavBar;
