import React from "react";
import plaza from "../assets/plazaambar.png";
import royal from "../assets/royalambar.png";
import "../styles/landing.scss";
import penyetan from "../assets/penyetan.jpg";
import alfa from "../assets/alfamidi.png";

function FourthFoldContent() {
	return (
		<div className="container">
			<div className="fourthContainer">
				<div className="top">
					<h3>DAMOGO</h3>
					<h1>Kerjasama</h1>
				</div>
				<div className="bottom">
					<img src={plaza} alt="" height="150px" />
					<img src={royal} alt="" height="150px" />
					<img src={penyetan} alt="" height="150px" />
					<img src={alfa} alt="" height="150px" />
				</div>
			</div>
		</div>
	);
}

export default FourthFoldContent;
