import React, { useEffect, useState } from "react";
import wifiLogo from "../assets/wifi.png";
import chipLogo from "../assets/chip.png";
import CardLogo from "../assets/bitcoin.png";

import "../abstracts/card.scss";

interface CardProps {
  logoImg: string;
  cardNumber: string;
  cardHolderName: string;
  validThru: string;
  vendor: {
    backgroundColor: string;
    icon: string;
  };
}

const CardList: React.FC = () => {
  const [latestCard, setLatestCard] = useState<CardProps | null>(null);

  useEffect(() => {
    const storedCards = localStorage.getItem("cards");
    if (storedCards) {
      const parsedCards = JSON.parse(storedCards);
      if (parsedCards.length > 0) {
        setLatestCard(parsedCards[parsedCards.length - 1]);
      }
    }
  }, []);

  const createCard = ({
    cardNumber = "XXXX XXXX XXXX XXXX",
    cardHolderName = "FIRSTNAME LASTNAME",
    validThru = "MM/YY",
    vendor: { backgroundColor, icon } = { backgroundColor: "rgba(208, 208, 208, 1)", icon: "" },
  }: CardProps) => {
   
    return (
      <div style={{ backgroundColor }} className="card">
        <div className="logoRow">
          <img className="wifiLogo" src={wifiLogo} alt="Wifi Logo" />
          <img className="chipLogo" src={chipLogo} alt="Chip Logo" />
          <img className="cardLogo" src={icon} alt="Card Logo" />
        </div>
        <div className="cardNo">
          <p className="cardNumber">{cardNumber}</p>
        </div>
        <div className="titleRow">
          <p className="titleText">CARDHOLDER NAME</p>
          <p className="titleText">VALID THRU</p>
        </div>
        <div className="infoRow">
          <p className="holderName">{cardHolderName}</p>
          <p className="validThru">{validThru}</p>
        </div>
      </div>
    );
  };

  return (
    <div className="card-list">
      {latestCard && createCard(latestCard)}
    </div>
  );
};

export default CardList;