import Card from "./Card";
import "../abstracts/cardstack.scss"; // Make sure to import the necessary styles

const CardStack = () => {
  const dynamicStyles = () => {
    return {
      marginBottom: `-260px`,
    };
  };

  return (
    <div className="card-list-container">
      {[1, 2, 3].map((index) => (
        <div className="card-list" key={index} style={dynamicStyles()}>
          <Card
            logoImg="../assets/bitcoin.png" // Provide the appropriate logo image path
            cardNumber="1111222233334444" // Provide the actual card number
            cardHolder="Your Name" // Provide the actual cardholder name
            validThru="01 / 24" // Provide the actual valid thru date
            backGroundColor="orange" // Provide the desired background color
          />
        </div>
      ))}
    </div>
  );
};

export default CardStack;
