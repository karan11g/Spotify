import React from "react";
import "../styles/Body.css";
import Header from "./Header";
import { useDataLayerValue } from "../helper/DataLayer";
import { PlayCircleFilled, MoreHoriz, Favorite } from "@material-ui/icons";
import SongRow from "./SongRow";

function Body({ spotify }) {
  const [{ discover_weekly }, dispatch] = useDataLayerValue();
  console.log("discover_weekly", discover_weekly);
  return (
    <div className="body">
      <Header spotify={spotify} />
      <div className="body__info">
        <img
          src="https://www.much.com/wp-content/uploads/2017/03/divide.jpg"
          alt=""
        />
        <div className="body__infotex">
          <strong> Playlist</strong>
          <p>Discovery Weekly</p>
          <h2>{discover_weekly?.description}</h2>
        </div>
      </div>
      <div className="body__songs">
        <div className="body__icons">
          <PlayCircleFilled className="body__sh" />
          <Favorite fontSize="large" />
          <MoreHoriz />
        </div>
        {discover_weekly?.tracks.items.map((item) => (
          <SongRow track={item.track} />
        ))}
      </div>
    </div>
  );
}

export default Body;
