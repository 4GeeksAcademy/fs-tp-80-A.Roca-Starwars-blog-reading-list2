import React from "react";
import { useContext } from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext.js"
import { PlanetCard } from "../component/planetCard.jsx";

export const Planets = () => {
    const { store, actions } = useContext(Context);
    let tatooine = "https://imgs.search.brave.com/Y6V30SQoPl8N9ZpQDo3KVM_4mEMcJOiKPC0hSehD9mE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9wbTEu/YW1pbm9hcHBzLmNv/bS82NzA4L2EyNGMy/ODIyNjM3ODQ0YWQ5/ZWRkZDU1YTU1YjFl/YjY2OTc4YTE0ZDlf/aHEuanBn"
    let alderaan = ""
    return (
        <div className="text-center mt-5">
            <div className="row">

                {store.planets?.map(el =>
                    <PlanetCard
                        key={el.uid}
                        img={
                            el.uid === "1" ? tatooine : `https://starwars-visualguide.com/assets/img/planets/${el.uid}.jpg`}
                        name={el.name}
                        uid={el.uid}
                    />)}
            </div>
        </div>
    );
}