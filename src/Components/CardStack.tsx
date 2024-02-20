import "../abstracts/cardstack.scss"
import Card from "./Card";

const CardStack = () => {
  const dynamicStyles = () => {
    return {
      marginBottom: `-10rem`,
    };
  };

  return (
    <div className="card-list-container">
      {[1, 2, 3].map((index) => (
        <div className="card-list" key={index} style={dynamicStyles()}>
          CARD {index}
        </div>
      ))}
    </div>
  );
};

export default CardStack;
