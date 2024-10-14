import React from "react";
import featured_list from "./FeaturedList";

function Featured() {
	return (
		<section className="section section-divider white promo">
			<div className="container">
				<div className="centered-container">
					<p className="section-subtitle">Achar Varieties</p>

					<h2 className="h2 section-title" style={{ marginTop: "12px" }}>
						Our Delicious <span className="span">Achars</span>
					</h2>
				</div>
				<ul className="promo-list has-scrollbar">
					{featured_list.map((promo, index) => (
						<li className="promo-item" key={index}>
							<div className="promo-card">
								<div className="card-icon"></div>
								<h3 className="h3 card-title">{promo.title}</h3>
								<p className="card-text">{promo.description}</p>
								<img src={promo.image} loading="lazy" alt={promo.alt} className="w-100 card-banner" />
							</div>
						</li>
					))}
				</ul>
			</div>
		</section>
	);
}

export default Featured;
