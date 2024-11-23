import React, { useContext, useEffect } from "react";
import { useParams } from "react-router";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const InfoPlanets = () => {
    const { store, actions } = useContext(Context);
    const params = useParams();

    const customImages = {
        "1": "https://imgs.search.brave.com/Y6V30SQoPl8N9ZpQDo3KVM_4mEMcJOiKPC0hSehD9mE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9wbTEu/YW1pbm9hcHBzLmNv/bS82NzA4L2EyNGMy/ODIyNjM3ODQ0YWQ5/ZWRkZDU1YTU1YjFl/YjY2OTc4YTE0ZDlf/aHEuanBn",
        "2": "https://starwars-visualguide.com/assets/img/planets/2.jpg",
        "3": "https://starwars-visualguide.com/assets/img/planets/3.jpg",
    };

    const imgUrl = customImages[params.uid] || `https://starwars-visualguide.com/assets/img/planets/${params.uid}.jpg`;

    useEffect(() => {
        actions.loadInfoPlanets(params.uid);
    }, [params.uid]);

    return (
        <div className="container">
            {store.infoPlanets?.properties ? (
                <div className="card">
                    <div className="card-img-container">
                        <img
                            src={imgUrl}
                            alt={store.infoPlanets?.properties?.name}
                            onError={(e) => {
                                e.target.src = "https://via.placeholder.com/300x300?text=No+Image+Available";
                            }}
                        />
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">{store.infoPlanets.properties.name}</h5>
                        <p className="card-text">Climate: {store.infoPlanets.properties.climate}</p>
                        <p className="card-text">Population: {store.infoPlanets.properties.population}</p>
                        <p className="card-text">Terrain: {store.infoPlanets.properties.terrain}</p>
                        <p className="card-text">Diameter: {store.infoPlanets.properties.diameter}</p>
                        <Link to="/planets">
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
