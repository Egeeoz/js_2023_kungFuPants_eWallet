
import CardLogo from "../assets/bitcoin.png";
import wifiLogo from "../assets/wifi.png";
import chipLogo from "../assets/chip.png";

interface CardProps {
  logoImg: string;
  cardNumber: number;
  cardHolder: string;
  validThru: number;
}

const Card = ({ logoImg, cardNumber, cardHolder, validThru }) => {
  return (
    <div className="container">
      <div className="card">
        <div className="row">
          <img className="wifiLogo" src={wifiLogo} />
          <img className="chipLogo" src={chipLogo} />
          <img className="cardLogo" src={CardLogo} /* {logoImg} */ />
        </div>
        <div className="cardNo">
          <p>1111 2222 3333 4444 {/* {cardNumber} */}</p>
        </div>
        <div className="rowTitle">
          <p>CARDHOLDER NAME</p>
          <p>VALID THRU</p>
        </div>
        <div className="rowInfo">
          <p className="holderName">Your name {/* {cardHolder} */}</p>
          <p className="validTo">01 / 24 {/* {validThru} */}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
