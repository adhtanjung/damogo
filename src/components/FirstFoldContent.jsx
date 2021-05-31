import React, { useEffect } from "react";
import Buah from "../assets/buah.png";
import "../styles/landing.scss";
import NavBar from "./NavBar";

function FirstFoldContent(props) {
	return (
		<div className="firstMainContainer">
			<NavBar />
			<div className="firstContainer container" id="first-fold">
				<div className="firstLeft">
					<h1>
						Create Taste, Not <span> Waste</span>
					</h1>
					<p>
						Selamatkan makanan lezat, makanan tidak terjual dari restaurant
						favoritmu, toko, dan pertanian agar tidak terbuang sia-sia serta
						dapatkan harga hemat hingga 90% dari harga reguler!
					</p>

					<div className="firstButton">
						<button>Buat janji temu!</button>
						<button className="bertemuButton">Bertemu tim kami</button>
					</div>
				</div>
				<div className="firstRight">
					<div className="blueBg">a</div>

					<div className="blueCircular">
						<div className="orangeCircular">
							<div className="greenCircular">
								<img src={Buah} alt="" className="image" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default FirstFoldContent;
