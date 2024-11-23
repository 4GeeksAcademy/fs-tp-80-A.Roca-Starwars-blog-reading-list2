import React, { useContext, useEffect } from "react";
import { useParams } from "react-router";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Details = () => {
    const { store, actions } = useContext(Context);
    const params = useParams();

    useEffect(() => {
        actions.loadInfoPerson(params.uid);
    }, [params.uid]);

    return (
        <div className="container d-flex justify-content-center align-items-center" >
            {store.person?.properties ? (
                <div className="card mb-3 shadow-lg" >
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img 
                                src={`https://starwars-visualguide.com/assets/img/characters/${params.uid}.jpg`} 
                                className="img-fluid rounded-start" 
                                alt={store.person?.properties?.name} 
                            />
                        </div>
                        <div className="col-md-8 ">
                            <div className="card-body">
                                <h5 className="card-title">{store.person.properties.name}</h5>
                                <p className="card-text">Altura: {store.person.properties.height}</p>
                                <p className="card-text">Peso: {store.person.properties.mass}</p>
                                <p className="card-text">Color de piel: {store.person.properties.skin_color}</p>
                                <p className="card-text">Color de pelo: {store.person.properties.hair_color}</p>
                                <p className="card-text">Género: {store.person.properties.gender}</p>
                            </div>
                            <Link to="/characters">
                                <button className=" btn btn-primary">Back</button>
                            </Link>
                        </div>
                    </div>
                </div>
            ) : (
                <h2>Loading...</h2>
            )}
        </div>
    );
};
