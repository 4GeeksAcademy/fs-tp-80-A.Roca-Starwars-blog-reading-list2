import React, { useContext, } from "react";
import { Context } from "../store/appContext"
import { Link } from "react-router-dom";
import "../../styles/navbar.css";

export const Navbar = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="d-flex align-items-center justify-content-between fixed-top p-2 navbar">
			<ul className="nav nav-pills">
				<li className="nav-item">
					<Link to="/" className="nav-link">Home</Link>
				</li>
				<li className="nav-item">
					<Link to="/Characters" className="nav-link">Characters</Link>
				</li>
				<li className="nav-item">
					<Link to="/Ships" className="nav-link">Ships</Link>
				</li>
				<li className="nav-item">
					<Link to="/Planets" className="nav-link">Planets</Link>
				</li>
			</ul>

			<div>
				<div className="btn-group dropstart" >
					<button className="btn btn-warning dropdown-toggle " type="button" data-bs-toggle="dropdown" aria-expanded="false">
						❤️ ({store.favorites.length})
					</button>
					<ul className="favorites dropdown-menu bg-dark">
						{store.favorites.length > 0 ? (store.favorites.map((item, index) => (
							<li key={index} className="dropdown-item custom d-flex justify-content-between align-items-end ">
								{item}<span className="papelera fa-regular fa-trash-can" onClick={(e) =>{ e.stopPropagation(); actions.removeFavorite(item)}}></span>
							</li>
						))) : (<li className="dropdown-item custom"> No favorites yet!</li>)
						}
					</ul>
				</div>
			</div>
		</div>
	);
};
