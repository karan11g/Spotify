import React from "react";
import SideBar from "./SideBar";
import Body from "./Body";
import "../styles/Player.css";
import Footer from "./Footer";

function Player({ spotify }) {
  return (
    <div className="player">
      <div className="player__body">
        <SideBar />
        <Body spotify={spotify} />
      </div>
      <Footer />
    </div>
  );
}

export default Player;
