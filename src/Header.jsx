import React, { useEffect, useRef } from "react";

function Header() {
	const headerRef = useRef(null);
	const navbarRef = useRef(null);
	const menuToggleBtnRef = useRef(null);
	const navbarLinksRef = useRef([]);

	useEffect(() => {
		const menuToggleBtn = menuToggleBtnRef.current;
		const navbar = navbarRef.current;

		const handleMenuToggle = () => {
			navbar.classList.toggle("active");
			menuToggleBtn.classList.toggle("active");
		};

		const handleLinkClick = () => {
			navbar.classList.toggle("active");
			menuToggleBtn.classList.toggle("active");
		};

		menuToggleBtn.addEventListener("click", handleMenuToggle);
		navbarLinksRef.current.forEach((link) => link.addEventListener("click", handleLinkClick));

		return () => {
			menuToggleBtn.removeEventListener("click", handleMenuToggle);
			navbarLinksRef.current.forEach((link) => link.removeEventListener("click", handleLinkClick));
		};
	}, []);
	useEffect(() => {
		const header = headerRef.current;
		// const backTopBtn = backTopBtnRef.current;

		const handleScroll = () => {
			if (window.scrollY >= 100) {
				header.classList.add("active");
				// backTopBtn.classList.add("active");
			} else {
				header.classList.remove("active");
				// backTopBtn.classList.remove('active');
			}
		};

		window.addEventListener("scroll", handleScroll);

		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<header className="header" ref={headerRef} data-header>
			<div className="container">
				<h1>
					<a href="/" className="logo">
						Gharelu Achar<span className="span">.</span>
					</a>
				</h1>

				<nav className="navbar" ref={navbarRef} data-navbar>
					<ul className="navbar-list">
						<li className="nav-item">
							<a href="#home" className="navbar-link" data-nav-link>
								Home
							</a>
						</li>

						<li className="nav-item">
							<a href="#about" className="navbar-link" data-nav-link>
								About Us
							</a>
						</li>

						<li className="nav-item">
							<a href="#blog" className="navbar-link" data-nav-link>
								Blog
							</a>
						</li>
					</ul>
				</nav>

				<div className="header-btn-group">
					<button className="btn btn-hover">
						<a href="#food-menu">Shop Now</a>
					</button>

					<button className="nav-toggle-btn" ref={menuToggleBtnRef} aria-label="Toggle Menu" data-menu-toggle-btn>
						<span className="line top"></span>
						<span className="line middle"></span>
						<span className="line bottom"></span>
					</button>
				</div>
			</div>
		</header>
	);
}

export default Header;
