import React from "react";
import about_list from "./AboutList";

function About() {
	return (
		<section className="section section-divider gray about" id="about">
			<div className="container">
				<div className="about-banner">
					<img src="https://indfused.files.wordpress.com/2020/06/1fcc82ae-a4f8-4519-a6ce-5e7591f98db2.jpeg?w=1400&h=1331&crop=1" loading="lazy" alt="Achar" className="about-img" />
				</div>

				<div className="about-content">
					<h2 className="h2 section-title">
						Veg, Chicken, Buff and Pork Pickles
						<span className="span"> &nbsp;for you!</span>
					</h2>

					<p className="section-text">Choose your favourite achar. We prepare fresh achars at home. It's organic and healthy choice to those products which can be found in the market.</p>

					<ul className="about-list">
						{about_list.map((item, index) => (
							<li className="about-item" key={index}>
								<ion-icon name={item.icon}></ion-icon>
								<span className="span">{item.text}</span>
							</li>
						))}
					</ul>

					<button className="btn btn-hover">Shop Now</button>
				</div>
			</div>
		</section>
	);
}

export default About;
