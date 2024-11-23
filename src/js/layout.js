import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import { Home } from "./views/home";
import injectContext from "./store/appContext";
import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import { Details } from "./component/details.jsx";
import { Characters } from "./component/characters.jsx";
import { Ships } from "./component/ships.jsx";
import { Planets } from "./component/planets.jsx"
import { InfoShips } from "./component/infoShips.jsx"
import { InfoPlanets } from "./component/infoPlanets.jsx";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/characters" element={<Characters />} />
						<Route path="/details/:uid" element={<Details />} />
						<Route path="/ships" element={<Ships />} />
						<Route path="/infoShips/:uid" element={<InfoShips />} />
						<Route path="/planets" element={<Planets />} />
						<Route path="/infoPlanets/:uid" element={<InfoPlanets />} />
						<Route path="*" element={<h1>Not found!</h1>} />
					</Routes>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
