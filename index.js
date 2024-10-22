import React from "react";
import Menu from "../../Components/Menu"
import "./styles.css"
import PlayerPodcast from "../..Components/PlayerPodcast";

const Podcast = () => {

return(
    <>
    <div className="back-wall">
        <Menu />
        <div>
            <h1>Podcast</h1>
            <p>Assista por aqui</p>
            <PlayerPodcast/>
           </div>
        </div>
    </div>
    </>
  )
}