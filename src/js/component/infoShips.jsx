import React, { useContext, useEffect } from "react";
import { useParams } from "react-router";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const InfoShips = () => {
    const { store, actions } = useContext(Context);
    const params = useParams();

    const customImages = {
        "2": "https://imgs.search.brave.com/Ga-hhYHRK3WMxcWrSb_SObnknFzjJlRYbKxcHS3cJVc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9wcmV2/aWV3LnJlZGQuaXQv/Y3I5MC1jb3J2ZXR0/ZS1ha2EtYmxvY2th/ZGUtcnVubmVyLXYw/LXp3YmQzNTQ3dDF6/OTEuanBnP3dpZHRo/PTY0MCZjcm9wPXNt/YXJ0JmF1dG89d2Vi/cCZzPTU1YzQwNzg1/Yjk1NmU5YzIwMTQ0/YTZkYTY0NzkwZDc3/MzJhMWNiZTg",
        "3": "https://imgs.search.brave.com/f9-gNKUbUKYAJJwUN0mTa3IrVOEbg3KRGKrEwEDCrq0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvNTE2/MDA0NDM2L3Bob3Rv/L3N0YXItZGVzdHJv/eWVyLmpwZz9zPTYx/Mng2MTImdz0wJms9/MjAmYz1RUXk4MWkw/eC1nVE5kbS16SEpn/bFJvSkYzS0NyQ2JR/WE1GekFUYkNoUmJn/PQ",
        "17": "https://imgs.search.brave.com/q7d-La_CtnwR4RpLdepo6n5mOVj71E0tRAi_oQhxgZM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLmV0/c3lzdGF0aWMuY29t/Lzg0NjEzODIvci9p/bC8xM2JlMjgvMTIw/MDM2MzgzOC9pbF82/MDB4NjAwLjEyMDAz/NjM4Mzhfa3A1Ni5q/cGc"
    };

    const imgUrl = customImages[params.uid] || `https://starwars-visualguide.com/assets/img/starships/${params.uid}.jpg`;


    useEffect(() => {
        actions.loadInfoShips(params.uid);
    }, [params.uid]);

    return (
        <div className="container">
            {store.infoShips?.properties ? (
                <div className="card mb-3 shadow-lg">
                    <div className="card">
                        <div className="card-img-container">
                            <img
                                src={imgUrl}
                                className="img-fluid rounded-start"
                                alt={store.infoShips?.properties?.model}
                                onError={(e) => {
                                    e.target.src = "https://via.placeholder.com/300x300?text=No+Image+Available";
                                }}
                            />
                        </div>
                            <div className="card-body">
                                <h5 className="card-title">{store.infoShips.properties.model}</h5>
                                <p className="card-text">
                                    Starship class: {store.infoShips.properties.starship_class}
                                </p>
                                <p className="card-text">
                                    Manufacturer: {store.infoShips.properties.manufacturer}
                                </p>
                                <p className="card-text">
                                    Passengers: {store.infoShips.properties.passengers}
                                </p>
                                <p className="card-text">
                                    Hyperdrive rating: {store.infoShips.properties.hyperdrive_rating}
                                </p>
                            </div>
                            <Link to="/ships">
                                <button className="back">Back</button>
                            </Link>
                        </div>
                    </div>
            ) : (
                <h2>Loading...</h2>
            )}
        </div>
    );
};
