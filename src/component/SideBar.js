import React from "react";
import "../styles/Sidebar.css";
import SidebarOption from "./SidebarOption";
import { Home, Search, LibraryMusic } from "@material-ui/icons";
import { useDataLayerValue } from "../helper/DataLayer";

function SideBar() {
  const [{ playlists }, dispatch] = useDataLayerValue();
  console.log(playlists);
  return (
    <div className="sidebar">
      <img
        src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png"
        alt=""
        className="sidebar__logo"
      />
      <SidebarOption option="Home" Icon={Home} />
      <SidebarOption option="Seacrh" Icon={Search} />
      <SidebarOption option="Your Library" Icon={LibraryMusic} />
      {/* <SidebarOption option="Home" /> */}
      <br />
      <strong className="sidaebar_playlist">PLAYLISTS</strong>
      <hr />

      {playlists?.items?.map((playlist) => (
        <SidebarOption option={playlist.name} />
      ))}
    </div>
  );
}

export default SideBar;
