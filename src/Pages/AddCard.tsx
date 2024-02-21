import Top from "../Components/Top";
import TextInput from "../Components/TextInput";
import { Link } from "react-router-dom";
import "../abstracts/linkBtn.scss";
import Card from "../Components/Card";
import { CardProps } from "../models/CardProps";

const deafaultCard: CardProps = {
  cardNumber: "XXXX XXXX XXXX XXXX",
  cardHolderName: "FIRSTNAME LASTNAME",
  validThru: "MM/YY",
  vendor: "default",
  active: false,
};

const AddCard = () => {
  return (
    <>
      <Link className="linkBtn" to="/">
        Home
      </Link>
      <Top text="Add a new bank card" smalltext="New Card" />
      <Card {...deafaultCard} />
      <TextInput />
    </>
  );
};

export default AddCard;
