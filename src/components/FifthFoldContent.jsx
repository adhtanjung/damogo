import React from "react";
import mobile from "../assets/cellphone2.png";
import "../styles/landing.scss";

function FifthFoldContent() {
	return (
		<div className="mainFifthFoldContainer">
			<div className="fifthFoldContainer container">
				<div className="left">
					<div className="image">
						<img src={mobile} alt="" width="150px" />
					</div>
				</div>
				<div className="right">
					<div className="top">
						<h3>DAMOGO</h3>
						<h1>Untuk Restoran</h1>
					</div>
					<div className="mid">
						<p>
							Aplikasi gratis kami adalah cara paling efisien untuk memesan dari
							semua pemasok Anda. Selesaikan pesanan lebih cepat, tidur lebih
							awal.
						</p>
					</div>
					<div className="bottom">
						<button>Pelajari selengkapnya</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default FifthFoldContent;
