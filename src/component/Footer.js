import React from "react";
import "../styles/Footer.css";
import {
  SkipNext,
  SkipPrevious,
  Shuffle,
  Repeat,
  PlayCircleOutline,
  PlaylistPlay,
  VolumeDown,
} from "@material-ui/icons";
import { Slider } from "@material-ui/core";

function Footer() {
  return (
    <div className="footer">
      <div className="footer__left"></div>
      <div className="footer__center">
        <Shuffle className="footer__green" />
        <SkipPrevious className="footer__icon" />
        <PlayCircleOutline fontSize="large" className="footer__icon" />
        <SkipNext className="footer__icon" />
        <Repeat className="footer__green" />
      </div>
      <div className="footer__right">
        <PlaylistPlay />
        <VolumeDown />
        <Slider className="footer__slider" />
      </div>
    </div>
  );
}

export default Footer;
