import React, { useEffect } from "react";
import "./App.css";
import Login from "./component/Login";
import { getTokenFromUrl } from "./helper/spotify.js";
import spotifyWebApi from "spotify-web-api-js";
import Player from "./component/Player";
import { useDataLayerValue } from "./helper/DataLayer";

const spotify = new spotifyWebApi();
function App() {
  const [{ token }, dispatch] = useDataLayerValue();

  useEffect(() => {
    const _token = getTokenFromUrl();
    window.location.hash = "";
    if (_token) {
      console.log("toekn", _token);
      dispatch({
        type: "SET_TOKEN",
        token: _token,
      });
      spotify.setAccessToken(_token);

      spotify.getMe().then((user) => {
        dispatch({
          type: "SET_USER",
          user: user,
        });
      });

      spotify.getUserPlaylists().then((playlists) => {
        console.log("play", playlists);
        dispatch({
          type: "SET_PLAYLIST",
          playlists: playlists,
        });
      });

      spotify.getPlaylist("2KxIKNRWgiQhQCMr5OdAAa").then((response) => {
        console.log("playlist", response);
        dispatch({
          type: "SET_WEEKLY",
          discover_weekly: response,
        });
      });
    }
  }, []);
  console.log(token);
  return (
    <div className="App">
      {token ? <Player spotify={spotify} /> : <Login />}
    </div>
  );
}

export default App;
