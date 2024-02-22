import "../abstracts/cardstack.scss";
import Card from "./Card";
import { CardProps } from "../models/CardProps";

interface CardStackProps {
  onClick: (nmr: string) => void;
  cards: CardProps[];
}

const CardStack: React.FC<CardStackProps> = ({ onClick, cards }) => {
  const inactiveCardsArray: CardProps[] = cards.filter((card) => !card.active);

  return (
    <div className="card-list-container">
      {inactiveCardsArray.map((card, index) => (
        <div
          className="card-list"
          key={index}
          style={{ marginBottom: `-250px` }}
          onClick={() => onClick(card.cardNumber)}
        >
          <Card {...card} />
        </div>
      ))}
    </div>
  );
};

export default CardStack;
