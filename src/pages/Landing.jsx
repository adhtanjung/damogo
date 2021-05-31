import React from "react";
import FirstFoldContent from "../components/FirstFoldContent";
import SecondFoldContent from "../components/SecondFoldContent";
import "../styles/landing.scss";

function Landing() {
	return (
		<div>
			<FirstFoldContent />
			<SecondFoldContent />
		</div>
	);
}

export default Landing;
