import React, { useEffect } from "react";
import FifthFoldContent from "../components/FifthFoldContent";
import FirstFoldContent from "../components/FirstFoldContent";
import Footer from "../components/Footer";
import FourthFoldContent from "../components/FourthFoldContent";
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
			<FourthFoldContent />
			<FifthFoldContent />
		</div>
	);
}

export default Landing;
