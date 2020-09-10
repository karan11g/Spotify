import React from "react";
import "../styles/login.css";
import { loginUrl } from "../helper/spotify.js";

function Login() {
  return (
    <div className="login">
      <img
        src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png"
        alt="   "
        className="login__logo"
      />
      <a className="login__button" href={loginUrl}>
        LOGIN WITH SPOTIFY
      </a>
    </div>
  );
}

export default Login;
