import React from "react";
import { useContext } from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext.js"
import { CharacterCard } from "./characterCard.jsx";

export const Characters = () => {

    const { store, actions } = useContext(Context);

    return (
        <div className="text-center mt-5">
            <div className="row" > 
                {store.people?.map(el =>
                    <CharacterCard
                        key={el.uid}
                        img={`https://starwars-visualguide.com/assets/img/characters/${el.uid}.jpg`}
                        name={el.name}
                        uid={el.uid}
                    />)}
            </div>
        </div>
    );
}