import React, { useState } from "react";
import AcharListData from "./AcharsListData";
import { useNavigate } from "react-router-dom";

function AcharsList() {
	const [selectedCategory, setSelectedCategory] = useState("All");
	const navigate = useNavigate();

	const handleFilter = (category) => {
		setSelectedCategory(category);
	};
	const filteredData = selectedCategory === "All" ? AcharListData : AcharListData.filter((item) => item.category === selectedCategory);

	return (
		<section className="section food-menu" id="food-menu">
			<div className="container">
				<p className="section-subtitle">Popular Achars</p>

				<h2 className="h2 section-title">
					Our Popular <span className="span">Achars</span>
				</h2>

				<p className="section-text">No doubt at all that we are one of the best place to order fresh and healthy achars.</p>

				<ul className="filter-list">
					{["All", "Veg", "Chicken", "Buff", "Pork"].map((category) => (
						<li key={category}>
							<button className={`filter-btn ${selectedCategory === category ? "active" : ""}`} onClick={() => handleFilter(category)}>
								{category}
							</button>
						</li>
					))}
				</ul>
				{filteredData.length > 0 ? (
					<ul className="food-menu-list">
						{filteredData.map((item) => (
							<li key={item.id}>
								<div className="food-menu-card">
									<div className="badge">{item.badge}</div>
									<img src={item.image} width="300" height="300" loading="lazy" alt={item.alt} className="w-100" />
									<div className="wrapper">
										<p className="category">{item.category}</p>
										<div className="rating-wrapper">
											{Array.from({ length: item.rating }, (_, i) => (
												<ion-icon key={i} name="star"></ion-icon>
											))}
										</div>
									</div>
									<h3 className="h3 card-title">{item.title}</h3>
									<div className="price-wrapper">
										<p className="price-text">Price:</p>
										<data className="price">{item.price.current}</data>
										<del className="del" value="69.00">
											{item.price.original}
										</del>
									</div>
									<button className="btn" aria-label="Order Now" style={{ marginTop: "12px" }} onClick={() => navigate(`/achar-details/${item.id}`)}>
										Order Now
									</button>
								</div>
							</li>
						))}
					</ul>
				) : (
					<h2 style={{ color: "maroon" }}>Oops, achar of this category is not available right now. Please try again later.</h2>
				)}
			</div>
		</section>
	);
}

export default AcharsList;
