import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { Link } from "react-router-dom";

export const PlanetCard = (props) => {
    const { store, actions } = useContext(Context);
    const [isFavorite, setIsFavorite] = useState(false);
    const navigate = useNavigate();


    useEffect(() => {
        setIsFavorite(store.favorites.includes(props.name));
    }, [store.favorites, props.name]);

    const handleClick = () => {
        navigate(`/infoPlanets/${props.uid}`);
    };

    const toggleFavorite = () => {
        if (isFavorite) {
            actions.removeFavorite(props.name);
        } else {
            actions.addFavorite(props.name);
        }
    };

    return (
        <div className="tarjetas col-sm-6 col-md-4 col-lg-3">
            <div className="card" width={'18rem'}>
                <img 
                    src={props.img} 
                    className="card-img-top" 
                    alt={props.name} 
                    onError={(e) => {
                        e.target.src = "https://via.placeholder.com/300x300?text=No+Image+Available";
                    }}
                />
                <div className="card-body">
                    <h5 className="card-title">{props.name}</h5>
                    <button className="back" onClick={handleClick} >Learn more</button>
                    <button
                        onClick={toggleFavorite}
                        className="fs-4 btn"
                        aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
                    >
                        {isFavorite ? "❤️" : "💛"}
                    </button>
                </div>
            </div>
        </div>
    );
};
