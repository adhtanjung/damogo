import React from "react";
import ceker from "../assets/ceker.png";
import "../styles/landing.scss";
function ThirdFoldContent() {
	return (
		<div className="thirdMainContainer">
			<div className="containerTmp">
				<div className="thirdContainer">
					<div className="left">
						<div className="firstLeft">
							<h3>BLOG</h3>

							<h2>Cara menyimpan daging agar awet dan segar tanpa Freezer</h2>
						</div>
						<div className="secondLeft">
							<p>
								Sudah banyak orang yang tahu jika menyimpan daging dalam freezer
								mejadi cara mudah menyimpan stok daging supaya awet dan tahan
								lama. Tapi bagaimana ya jika tidak memiliki kulkas atau freezer?
								Tenang! Ada kok caranya, <span>yuk disimak!</span>
							</p>
						</div>
						<div className="thirdLeft">
							<button>Baca selengkapnya</button>
						</div>
					</div>
					<div className="right">
						<img src={ceker} alt="" width="350px" />
					</div>
				</div>
				<div className="bgDesign"></div>
			</div>
		</div>
	);
}

export default ThirdFoldContent;
