import React, { useEffect } from "react";
import FirstFoldContent from "../components/FirstFoldContent";
import SecondFoldContent from "../components/SecondFoldContent";
import ThirdFoldContent from "../components/ThirdFoldContent";
import "../styles/landing.scss";

function Landing(props) {
	// const handleScroll = () => {
	// 	if (window.scrollY > 20) {
	// 		document.querySelector(".navbar").className = "headerContainer scroll";
	// 	} else {
	// 		document.querySelector(".navbar").className = "headerContainer";
	// 	}
	// };
	// useEffect(() => {
	// 	window.addEventListener("scroll", handleScroll);
	// 	return () => {
	// 		window.removeEventListener("scroll", handleScroll);
	// 	};
	// }, []);
	return (
		<div className="main">
			<FirstFoldContent />
			<SecondFoldContent />
			<ThirdFoldContent />
		</div>
	);
}

export default Landing;
