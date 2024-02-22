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
  icon,
  text,
}) => {
  const cardStyle = {
    backgroundColor: bgColor,
    color: text,
  };
  const iconImg = {
    backgroundImage: `url(${icon})`,
  };
  return (
    <div style={cardStyle} className={`card ${vendor}`}>
      <div className="logoRow">
        <img className={`wifiLogo ${vendor}`} src={wifiLogo} alt="Wifi Logo" />
        <img className={`chipLogo ${vendor}`} src={chipLogo} alt="Chip Logo" />
        <div style={iconImg} className={`cardLogo ${vendor}`} />
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
