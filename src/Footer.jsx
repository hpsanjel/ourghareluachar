import React from "react";

function Footer() {
	return (
		<div className="footer" id="contact">
			<div className="footer-top">
				<div className="container">
					<div className="footer-brand" id="footer-brand">
						<a href="" className="logo">
							Gharelu Achar<span className="span">.</span>
						</a>

						<p className="footer-text">Food experts support us to to find out which way you can raise your funds more.</p>

						<ul className="social-list">
							<li>
								<a href="#" className="social-link">
									<ion-icon name="logo-facebook"></ion-icon>
								</a>
							</li>

							<li>
								<a href="#" className="social-link">
									<ion-icon name="logo-tiktok"></ion-icon>
								</a>
							</li>

							<li>
								<a href="#" className="social-link">
									<ion-icon name="logo-youtube"></ion-icon>
								</a>
							</li>
						</ul>
					</div>

					<ul className="footer-list">
						<li>
							<p className="footer-list-title">Contact Info</p>
						</li>

						<li>
							<p className="footer-list-item">+977 9851000494</p>
						</li>

						<li>
							<p className="footer-list-item">info@ghareluachar.com</p>
						</li>

						<li>
							<address className="footer-list-item">Chabahil, Kathmandu, Nepal</address>
						</li>
					</ul>

					<ul className="footer-list">
						<li>
							<p className="footer-list-title">Opening Hours</p>
						</li>

						<li>
							<p className="footer-list-item">Sunday-Friday: 07:00-22:00</p>
						</li>

						<li>
							<p className="footer-list-item">Saturday: 08:00-21:00</p>
						</li>
					</ul>
					<ul className="footer-list">
						<li>
							<p className="footer-list-title">Important Links</p>
						</li>

						<li>
							<p className="footer-list-item">
								<a href="home-delivery.html">Home Delivery</a>
							</p>
						</li>
						<li>
							<p className="footer-list-item">
								<a href="payment-method.html">Payment Method</a>
							</p>
						</li>

						<li>
							<p className="footer-list-item">
								<a href="manufacturing.html">Manufacturing</a>
							</p>
						</li>
					</ul>
				</div>
			</div>

			<div className="footer-bottom">
				<div className="container">
					<p className="copyright-text">
						&copy; 2024{" "}
						<a href="#" className="copyright-link">
							ghareluachar.
						</a>{" "}
						All Rights Reserved.
					</p>
				</div>
			</div>
			<a href="#top" className="back-top-btn" aria-label="Back to top" data-back-top-btn>
				<ion-icon name="chevron-up"></ion-icon>
			</a>
		</div>
	);
}

export default Footer;
