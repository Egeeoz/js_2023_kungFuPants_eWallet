import "../abstracts/card.scss";
import CardLogo from "../assets/bitcoin.png";
import wifiLogo from "../assets/wifi.png";
import chipLogo from "../assets/chip.png";

interface CardProps {
  logoImg: string;
  cardNumber: number;
  cardHolder: string;
  validThru: number;
}

const Card = ({ logoImg, cardNumber, cardHolder, validThru }: CardProps) => {
  return (
    <div className="card">
      <div className="logoRow">
        <img className="wifiLogo" src={wifiLogo} />
        <img className="chipLogo" src={chipLogo} />
        <img className="cardLogo" src={CardLogo} /* {logoImg} */ />
      </div>
      <div className="cardNo">
        <p className="cardNumber">1111 2222 3333 4448 {/* {cardNumber} */}</p>
      </div>
      <div className="titleRow">
        <p className="titleText">CARDHOLDER NAME</p>
        <p className="titleText">VALID THRU</p>
      </div>
      <div className="infoRow">
        <p className="holderName">Your name {/* {cardHolder} */}</p>
        <p className="validThru">01/24 {/* {validThru} */}</p>
      </div>
    </div>
  );
};

export default Card;
