import "../abstracts/card.scss";
import CardLogo from "../assets/bitcoin.png";
import wifiLogo from "../assets/wifi.png";
import chipLogo from "../assets/chip.png";

interface CardProps {
  logoImg: string;
  cardNumber: string;
  cardHolder: string;
  validThru: string;
  backGroundColor: string;
}
const createCard = () => {
  const creditCard = (
    <>
      <div className="card">
        <div className="logoRow">
          <img className="wifiLogo" src={wifiLogo} />
          <img className="chipLogo" src={chipLogo} />
          <img className="cardLogo" src={CardLogo} /* {logoImg} */ />
        </div>
        <div className="cardNo">
          <p className="cardNumber">XXXX XXXX XXXX XXXX {/* {cardNumber} */}</p>
        </div>
        <div className="titleRow">
          <p className="titleText">CARDHOLDER NAME</p>
          <p className="titleText">VALID THRU</p>
        </div>
        <div className="infoRow">
          <p className="holderName">FIRSTNAME LASTNAME {/* {cardHolder} */}</p>
          <p className="validThru">MM/YY {/* {validThru} */}</p>
        </div>
      </div>
    </>
  );
  return creditCard;
};

const Card = ({
  logoImg,
  cardNumber,
  cardHolder,
  validThru,
  backGroundColor,
}: CardProps) => {
  return <>{createCard()}</>;
};

export default Card;
