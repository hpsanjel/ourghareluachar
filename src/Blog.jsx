import React from "react";
import blog_list from "./BlogList";

function Blog() {
	return (
		<section className="section section-divider white blog" id="blog">
			<div className="container">
				<p className="section-subtitle">Latest Achar Blog</p>

				<h2 className="h2 section-title">
					Explore more about <span className="span">Organic Achars</span>
				</h2>

				<p className="section-text">Achar is any substance consumed to provide nutritional support for an organism.</p>
				<ul className="blog-list">
					{blog_list.map((blog, index) => (
						<li key={index}>
							<div className="blog-card">
								<div className="card-banner">
									<img src={blog.banner.imgSrc} width={blog.banner.width} height={blog.banner.height} loading={blog.banner.loading} alt={blog.banner.alt} className="w-100" />
									<div className="badge">{blog.banner.badge}</div>
								</div>

								<div className="card-content">
									<div className="card-meta-wrapper">
										<a href="#" className="card-meta-link">
											<ion-icon name="calendar-outline"></ion-icon>
											<time className="meta-info" dateTime="2024-01-01">
												{blog.meta.date}
											</time>
										</a>

										<a href="#" className="card-meta-link">
											<ion-icon name="person-outline"></ion-icon>
											<p className="meta-info">{blog.meta.author}</p>
										</a>
									</div>

									<h3 className="h3">
										<a href="#" className="card-title">
											{blog.title}
										</a>
									</h3>

									<p className="card-text">{blog.description}</p>

									<a href={blog.readMoreLink} className="btn-link">
										<span>Read More</span>
										<ion-icon name="arrow-forward" aria-hidden="true"></ion-icon>
									</a>
								</div>
							</div>
						</li>
					))}
				</ul>
			</div>
		</section>
	);
}

export default Blog;
