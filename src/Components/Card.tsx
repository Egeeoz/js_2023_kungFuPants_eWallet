import "../abstracts/card.scss";
import wifiLogo from "../assets/wifi.png";
import chipLogo from "../assets/chip.png";
import CardLogo from "../assets/bitcoin.png";

import "../abstracts/card.scss";

interface CardProps {
  logoImg: string;
  cardNumber: string;
  cardHolder: string;
  validThru: string;
  backGroundColor: string;
}

const createCard = ({
  logoImg = CardLogo,
  cardNumber = "XXXX XXXX XXXX XXXX",
  cardHolder = "FIRSTNAME LASTNAME",
  validThru = "MM/YY",
  backGroundColor = "rgba(208, 208, 208, 1)",
}: CardProps) => {
  return (
    <>
      <div style={{ backgroundColor: backGroundColor }} className="card">
        <div className="logoRow">
          <img className="wifiLogo" src={wifiLogo} alt="Wifi Logo" />
          <img className="chipLogo" src={chipLogo} alt="Chip Logo" />
          <img className="cardLogo" src={logoImg} alt="Card Logo" />
        </div>
        <div className="cardNo">
          <p className="cardNumber">{cardNumber}</p>
        </div>
        <div className="titleRow">
          <p className="titleText">CARDHOLDER NAME</p>
          <p className="titleText">VALID THRU</p>
        </div>
        <div className="infoRow">
          <p className="holderName">{cardHolder}</p>
          <p className="validThru">{validThru}</p>
        </div>
      </div>
    </>
  );
};


const Card = (props: CardProps) => {
  return <>{createCard(props)}</>;
};

export default Card;