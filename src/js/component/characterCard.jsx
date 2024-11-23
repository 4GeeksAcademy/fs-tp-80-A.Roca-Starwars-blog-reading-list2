import React, { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { Context } from "../store/appContext";
import "../../styles/home.css";

export const CharacterCard = (props) => {
    const { store, actions } = useContext(Context);
    const [isFavorite, setIsFavorite] = useState(false);
    store.favorites.includes(props.name);
    const navigate = useNavigate();

    useEffect(() => {
        setIsFavorite(store.favorites.includes(props.name));
    }, [store.favorites, props.name]);

    const handleClick = () => {
        navigate('/details/' + props.uid);
    };

    const toggleFavorite = () => {
        setIsFavorite(!isFavorite);
        if (!isFavorite) {
            actions.addFavorite(props.name);
        } else {
            actions.removeFavorite(props.name);
        }
    };

    return (
        <div className="tarjetas col-sm-6 col-md-4 col-lg-3" >
            <div className="card" width={'18rem'}>
                <img
                    src={props.img}
                    className="card-img-top"
                    alt={props.name} />
                <div className="card-body">
                    <h5 className="card-title">{props.name}</h5>
                    <button className="back" onClick={handleClick}>Learn more</button>
                    <button
                        onClick={toggleFavorite}
                        className="fs-4 btn">
                        {isFavorite ? "❤️" : "💛"}
                    </button>
                </div>
            </div>
        </div>
    )
}