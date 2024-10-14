import React from "react";

function CTA() {
	return (
		<section className="section section-divider white cta">
			<div className="container">
				<div className="cta-content">
					<h2 className="h2 section-title">
						Smart people always choose
						<span className="">Healthy Achars!</span>
					</h2>

					<p className="section-text">Our achars are all made by hands at home keeping hygiene and your health at the center. Hence, you can eat these achars worryfree.</p>

					<button className="btn btn-hover">Order Now</button>
				</div>
				<figure className="cta-banner">
					<img src="./assets/images/5.png" loading="lazy" alt="achar" className="cta-img" />
				</figure>
			</div>
		</section>
	);
}

export default CTA;
