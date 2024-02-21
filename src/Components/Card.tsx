import React, { useEffect, useState } from "react";
import wifiLogo from "../assets/wifi.png";
import chipLogo from "../assets/chip.png";
import CardLogo from "../assets/bitcoin.png";

import "../abstracts/card.scss";

interface CardProps {
  // logoImg: string;
  cardNumber: string;
  cardHolderName: string;
  validThru: string;
  vendor: {
    backgroundColor: string;
    icon: string;
    color: string;
  };
}

const CardList: React.FC<CardProps> = () => {
  const [latestCard, setLatestCard] = useState({
    cardNumber: "XXXX XXXX XXXX XXXX",
    cardHolderName: "FIRSTNAME LASTNAME",
    validThru: "MM/YY",
    vendor: {
      backgroundColor: "rgba(208, 208, 208, 1,)",
      icon: CardLogo,
      color: "rgba(0,0,0,1)",
    },
  });

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
    vendor: { backgroundColor, icon, color } = {
      backgroundColor: "rgba(208, 208, 208, 1)",
      icon: "",
      color: "rgba(0,0,0,1)",
    },
  }: CardProps) => {
    return (
      <div
        style={{ backgroundColor: backgroundColor, color: color }}
        className="card"
      >
        <div className="logoRow">
          <img className="wifiLogo" src={wifiLogo} alt="Wifi Logo" />
          <img className="chipLogo" src={chipLogo} alt="Chip Logo" />
          <img className="cardLogo" src={icon} alt="Card Logo" />
        </div>
        <div className="cardNo">
          <p style={{ color: color }} className="cardNumber">
            {cardNumber}
          </p>
        </div>
        <div className="titleRow">
          <p style={{ color: color }} className="titleText">
            CARDHOLDER NAME
          </p>
          <p style={{ color: color }} className="titleText">
            VALID THRU
          </p>
        </div>
        <div style={{ color: color }} className="infoRow">
          <p style={{ color: color }} className="holderName">
            {cardHolderName}
          </p>
          <p style={{ color: color }} className="validThru">
            {validThru}
          </p>
        </div>
      </div>
    );
  };

  return (
    <div className="card-list">{latestCard && createCard(latestCard)}</div>
  );
};

export default CardList;
