import React from "react";
import testimonial_list from "./TestimonialList";

function Testimonials() {
	return (
		<section className="section section-divider white testi">
			<div className="container">
				<p className="section-subtitle">Testimonials</p>

				<h2 className="h2 section-title">
					What our <span className="span">Customers Say</span>
				</h2>

				<p className="section-text">We are always thankful to our customers for their valuable feedback.</p>
				<ul className="testi-list has-scrollbar">
					{testimonial_list.map((item, index) => (
						<li className="testi-item" key={index}>
							<div className="testi-card">
								<div className="profile-wrapper">
									<figure className="avatar">
										<img src={item.profile.avatar.src} width={item.profile.avatar.width} height={item.profile.avatar.height} loading={item.profile.avatar.loading} alt={item.profile.avatar.alt} />
									</figure>
									<div>
										<h3 className="h4 testi-name">{item?.profile?.name}</h3>
										<p className="testi-title">{item?.profile?.title}</p>
									</div>
								</div>
								<blockquote className="testi-text">"{item?.quote}"</blockquote>
								<div className="rating-wrapper">
									{Array.from({ length: item?.rating }, (_, i) => (
										<ion-icon key={i} name="star"></ion-icon>
									))}
								</div>
							</div>
						</li>
					))}
				</ul>
			</div>
		</section>
	);
}

export default Testimonials;
