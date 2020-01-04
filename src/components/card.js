import React, { Component } from "react";
import "./components/card.css";
import Ben from "./components/images/Ben.png";
import Chandler from "./components/images/Chandler.jpg";
import Gunther from "./components/images/Gunther.jpg";
import Janice from "./components/images/Janice.jpg";
import Joey from "./components/images/Joey.jpg";
import Mindy from "./components/images/Mindy.jpg";
import Julie from "./components/images/Julie.png";
import Joshua from "./components/images/Joshua.png";
import Phoebe from "./components/images/Phoebe.jpg";

import Richard from "./components/images/Richard.jpg";
import Ross from "./components/images/Ross.jpg";
import Rachel from "./components/images/Rachel.png";

const style = {
  sizing: {
    width: "100%"
  }
};

const cards = [
  <div className="card col col-xl-3 col-lg-3 col-md-3 col-sm-3 col-xs-3">
    <img src={Ben} alt="Ben" />
  </div>,
  <div className="card col col-xl-3 col-lg-3 col-md-3 col-sm-3 col-xs-3">
    <img src={Chandler} alt="Chandler" />
  </div>,
  <div className="col col-xl-3 col-lg-3 col-md-3 col-sm-3 col-xs-3">
    <img src={Gunther} alt="Gunther" />
  </div>,
  <div className="col col-xl-3 col-lg-3 col-md-3 col-sm-3 col-xs-3">
    <img src={Janice} alt="Janice" />
  </div>,
  <div className="col col-xl-3 col-lg-3 col-md-3 col-sm-3 col-xs-3">
    <img src={Joey} alt="Joey" />
  </div>,
  <div className="col col-xl-3 col-lg-3 col-md-3 col-sm-3 col-xs-3">
    <img src={Mindy} alt="Mindy" />
  </div>,
  <div className="col col-xl-3 col-lg-3 col-md-3 col-sm-3 col-xs-3">
    <img src={Julie} alt="Julie" />
  </div>,
  <div className="col col-xl-3 col-lg-3 col-md-3 col-sm-3 col-xs-3">
    <img src={Joshua} alt="Joshua" />
  </div>,
  <div className="col col-xl-3 col-lg-3 col-md-3 col-sm-3 col-xs-3">
    <img src={Phoebe} alt="Phoebe" />
  </div>,
  <div className="col col-xl-3 col-lg-3 col-md-3 col-sm-3 col-xs-3">
    <img src={Richard} alt="Richard" />
  </div>,
  <div className="col col-xl-3 col-lg-3 col-md-3 col-sm-3 col-xs-3">
    <img src={Ross} alt="Ross" />
  </div>,
  <div className="col col-xl-3 col-lg-3 col-md-3 col-sm-3 col-xs-3">
    <img src={Rachel} alt="Rachel" />
  </div>
];

const cardLength = cards.length;

const randomCards = cards.map(card => {});

function Card() {
  return <>{cards}</>;
}

export default Card;
