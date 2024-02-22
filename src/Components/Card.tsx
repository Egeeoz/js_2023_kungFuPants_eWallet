import React from "react";
import wifiLogo from "../assets/wifi.png";
import chipLogo from "../assets/chip.png";

import "../abstracts/card.scss";
import { CardProps } from "../models/CardProps";

const CardList: React.FC<CardProps> = ({
  cardNumber,
  cardHolderName,
  validThru,
  vendor,
  bgColor,
}) => {
  console.log(vendor);
  const cardStyle = {
    backgroundColor: bgColor,
    //background-img: url icon
    //textcolor:color
  };
  console.log(bgColor);
  return (
    <div style={cardStyle} className={`card ${vendor}`}>
      <div className="logoRow">
        <img className={`wifiLogo ${vendor}`} src={wifiLogo} alt="Wifi Logo" />
        <img className="chipLogo" src={chipLogo} alt="Chip Logo" />
        <div className={`cardLogo ${vendor}`} />
      </div>
      <div className={`cardNo ${vendor}`}>
        <p className={`cardNumber ${vendor}`}>
          {cardNumber.replace(/(.{4})/g, "$1 ")}
        </p>
      </div>
      <div className="titleRow">
        <p className={`titleText ${vendor}`}>CARDHOLDER NAME</p>
        <p className={`titleText ${vendor}`}>VALID THRU</p>
      </div>
      <div className="infoRow">
        <p className={`holderName ${vendor}`}>{cardHolderName}</p>
        <p className={`validThru ${vendor}`}>
          {validThru.replace(/.{2}(?=.)/, "$&/")}
        </p>
      </div>
    </div>
  );
};

export default CardList;
