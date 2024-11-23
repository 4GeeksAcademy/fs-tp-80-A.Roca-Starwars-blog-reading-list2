import React from "react";
import { useContext } from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext.js";
import { ShipCard } from "../component/shipCard.jsx";

export const Ships = () => {
    let CR90corvette = "https://imgs.search.brave.com/Ga-hhYHRK3WMxcWrSb_SObnknFzjJlRYbKxcHS3cJVc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9wcmV2/aWV3LnJlZGQuaXQv/Y3I5MC1jb3J2ZXR0/ZS1ha2EtYmxvY2th/ZGUtcnVubmVyLXYw/LXp3YmQzNTQ3dDF6/OTEuanBnP3dpZHRo/PTY0MCZjcm9wPXNt/YXJ0JmF1dG89d2Vi/cCZzPTU1YzQwNzg1/Yjk1NmU5YzIwMTQ0/YTZkYTY0NzkwZDc3/MzJhMWNiZTg";
    let StarDestroyer = "https://imgs.search.brave.com/f9-gNKUbUKYAJJwUN0mTa3IrVOEbg3KRGKrEwEDCrq0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvNTE2/MDA0NDM2L3Bob3Rv/L3N0YXItZGVzdHJv/eWVyLmpwZz9zPTYx/Mng2MTImdz0wJms9/MjAmYz1RUXk4MWkw/eC1nVE5kbS16SEpn/bFJvSkYzS0NyQ2JR/WE1GekFUYkNoUmJn/PQ";
    let revelTransport = "https://imgs.search.brave.com/q7d-La_CtnwR4RpLdepo6n5mOVj71E0tRAi_oQhxgZM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLmV0/c3lzdGF0aWMuY29t/Lzg0NjEzODIvci9p/bC8xM2JlMjgvMTIw/MDM2MzgzOC9pbF82/MDB4NjAwLjEyMDAz/NjM4Mzhfa3A1Ni5q/cGc";

    const { store, actions } = useContext(Context);

    return (
        <div className="text-center mt-5">
            <div className="row">
                {store.ships?.map(el => {
                    let imageUrl;

                    if (el.uid === "2") {
                        imageUrl = CR90corvette;
                    } else if (el.uid === "3") {
                        imageUrl = StarDestroyer;
                    } else if (el.uid === "17") {
                        imageUrl = revelTransport;
                    } else {
                        imageUrl = `https://starwars-visualguide.com/assets/img/starships/${el.uid}.jpg`;
                    }

                    return (
                        <ShipCard
                            key={el.uid}
                            img={imageUrl}
                            name={el.name}
                            uid={el.uid}s
                        />
                    );
                })}
            </div>
        </div>
    );
};
