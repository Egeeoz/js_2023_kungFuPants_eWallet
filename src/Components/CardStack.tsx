import "../abstracts/cardstack.scss"
import "../abstracts/cardstack.scss"
import Card from "./Card";
import "../abstracts/cardstack.scss";
import CardLogo from "../assets/bitcoin.png";
import AnotherCardLogo from "../assets/ninja.png";

function CardStack() {
  return (
    <div className="card-list-container">
      {[1, 2, 3].map((index) => (
        <div className="card-list" key={index} style={{ marginBottom: `-250px` }}>
          <Card
            logoImg={index === 3 ? AnotherCardLogo : CardLogo}
            cardNumber="12345678"
            cardHolder="active"
            validThru="01 / 24"
            backGroundColor={index === 3 ? "green" : "rgba(208, 208, 208, 1)"}
          />
        </div>
      ))}
    </div>
  );
};

export default CardStack;
