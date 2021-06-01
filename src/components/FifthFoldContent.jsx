import React from "react";
import mobile from "../assets/cellphone2.png";
import "../styles/landing.scss";
import mobile2 from "../assets/cellphone3.png";

function FifthFoldContent() {
	return (
		<div>
			<div className="restoMain" id="resto-fold">
				<div className="restoContainer container">
					<div className="restoLeft">
						<img src={mobile} alt="" width="200px" />
						<div className="firstCircle"> a</div>
					</div>
					<div className="restoRight">
						<div className="rightFirst">
							<h3>DAMOGO</h3>
							<h1>Untuk Restoran</h1>
						</div>

						<div className="rightSecond">
							<p>
								Aplikasi gratis kami adalah cara paling efisien untuk memesan
								dari semua pemasok Anda. Selesaikan pesanan lebih cepat, tidur
								lebih awal.
							</p>
						</div>
						<div className="rightThird">
							<button>Pelajari Selengkapnya</button>
						</div>
					</div>
				</div>
			</div>
			<div className="supplierMain" id="supplier-fold">
				<div className="supplierContainer container">
					<div className="supplierLeft">
						<div className="leftFirst">
							<h3>DAMOGO</h3>
							<h1>Untuk Supplier</h1>
						</div>
						<div className="leftSecond">
							Baik Anda adalah pertanian milik keluarga atau distributor
							nasional, platform khusus kami akan mengubah cara Anda berbisnis.
							Hemat waktu untuk tugas manual, kurangi kesalahan pesanan, dan
							jual lebih banyak produk.
						</div>
						<div className="leftThird">
							<button>Pelajari Selengkapnya</button>
						</div>
					</div>
					<div className="supplierRight">
						<img src={mobile2} alt="" width="200px" />
						<div className="firstCircle"> a</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default FifthFoldContent;
