import React from "react";
import "../styles/landing.scss";
import mobilephone from "../assets/cellphone.png";
function SecondFoldContent() {
	return (
		<div className="secondMainContainer">
			<div className="secondContainer container" id="second-fold">
				<div>
					<h3>DAMOGO </h3> <h1>Demo Aplikasi</h1>
				</div>
				<div className="detail">
					<div className="left">
						<img src={mobilephone} alt="" height="700px" />
					</div>
					<div className="right">
						<p>
							<span>DamoGO</span> adalah sistem yang membantu proses pengadaan
							bahan makanan lebih mudah dan efisien
							<br />
							<br />
							Atur semua pesanan dari supplier maupun bahan dari kamu ke
							franchise secara online
						</p>
						<button>
							Lihat Demo{" "}
							<svg
								width="28px"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
								></path>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
								></path>
							</svg>
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default SecondFoldContent;
