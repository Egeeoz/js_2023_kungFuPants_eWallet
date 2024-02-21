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
}) => {
  console.log(vendor);
  return (
    <div className={`card ${vendor}`}>
      <div className="logoRow">
        <img className="wifiLogo" src={wifiLogo} alt="Wifi Logo" />
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
        <p className={`validThru ${vendor}`}>{validThru}</p>
      </div>
    </div>
  );
};

export default CardList;
