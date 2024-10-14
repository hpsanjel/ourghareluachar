import React, { useEffect, useRef } from "react";

function DeliveryCTA() {
	const deliveryBoyRef = useRef(null);
	useEffect(() => {
		const deliveryBoy = deliveryBoyRef.current;
		let deliveryBoyMove = 50;
		let lastScrollPos = 0;

		const handleScroll = () => {
			let deliveryBoyTopPos = deliveryBoy.getBoundingClientRect().top;

			if (deliveryBoyTopPos < 400 && deliveryBoyTopPos > -500) {
				let activeScrollPos = window.scrollY;

				if (lastScrollPos < activeScrollPos) {
					deliveryBoyMove += 1;
				} else {
					deliveryBoyMove -= 1;
				}

				lastScrollPos = activeScrollPos;
				deliveryBoy.style.transform = `translateX(${deliveryBoyMove}px)`;
			}
		};

		window.addEventListener("scroll", handleScroll);

		return () => window.removeEventListener("scroll", handleScroll);
	}, []);
	return (
		<section className="section section-divider gray delivery">
			<div className="container">
				<div className="about-content">
					<h2 className="h2 section-title">
						Free and Quick Delivery at <span className="span">Your Doorsteps!</span>
					</h2>

					<p className="section-text">With just a single click you can now enjoy varieties of home. We are always ready to deliver your achars on time.</p>

					<button className="btn btn-hover">Order Now</button>
				</div>

				<figure>
					<img src="./assets/images/delivery-boy.png" ref={deliveryBoyRef} loading="lazy" alt="delivery boy" data-delivery-boy />
				</figure>
			</div>
		</section>
	);
}

export default DeliveryCTA;
