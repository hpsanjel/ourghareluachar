import About from "./About";
import AcharsList from "./AcharsList";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Featured from "./Featured";
import Header from "./Header";
import Hero from "./Hero";
import CTA from "./CTA";
import DeliveryCTA from "./DeliveryCTA";
import Testimonials from "./Testimonials";
import Blog from "./Blog";
import Footer from "./Footer";
import AcharDetails from "./AcharDetails";

function App() {
	return (
		<Router>
			<Routes>
				<Route
					path="/"
					element={
						<>
							<Header />
							<Hero />
							<About />
							<Featured />
							<AcharsList />
							<CTA />
							<DeliveryCTA />
							<Testimonials />
							<Blog />
							<Footer />
						</>
					}
				/>
				<Route path="/achars" element={<AcharsList />} />
				<Route path="/achar-details/:id" element={<AcharDetails />} />
			</Routes>
		</Router>
	);
}

export default App;
