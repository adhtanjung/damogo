import React from "react";
import logo from "../assets/damogo-removebg-preview.png";
import google from "../assets/googleplay.png";
import apple from "../assets/appstore.png";
import "../styles/landing.scss";

function Footer() {
	return (
		<div className="footerMain">
			<div className="footerContainer container">
				<div className="footerLeftContainer">
					<div className="companyLogo">
						<img src={logo} alt="" height="30px" />
					</div>
					<div className="companyDetails">
						<div className="followUs">
							<span className="wh">Ikuti Kami</span>

							<span>Terms of Use</span>
							<span>Privacy</span>
							<span>Careers</span>
							<span>About</span>
							<span>CA Supply Chains Act</span>
							<span>Sustainability</span>
							<span>Affiliates</span>
							<span>Recall Info</span>
							<span>Inclusion and Diversity</span>
						</div>
						<div className="contactUs">
							<span className="wh">Hubungi Kami</span>
							<div className="hd">
								<span className="re">Alamat</span>

								<p>
									Jl. Prof. Herman Yohanes No.1212, Terban, Kec. Gondokusuman,
									Kota Yogyakarta, Daerah Istimewa Yogyakarta 55223
								</p>
							</div>

							<div className="hd">
								<span className="re">Jam buka</span>
								<p>Mon - Fri 6:00 am - 8:00 pm Sat & Sun 9:30 am - 6:00 pm</p>
							</div>
						</div>
					</div>
				</div>
				<div className="footerRightContainer">
					<h3>Download DamoGO App</h3>
					<div className="downloadImg">
						<img src={google} alt="" height="50px" />
						<img src={apple} alt="" height="50px" />
					</div>
				</div>
			</div>
		</div>
	);
}

export default Footer;
