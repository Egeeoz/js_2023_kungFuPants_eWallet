import Top from "../Components/Top";
import TextInput from "../Components/TextInput";
import { Link } from "react-router-dom";
import "../abstracts/linkBtn.scss";
import Card from "../Components/Card";
import { initialCards } from "../constants/InitialCards";

const AddCard = () => {
  return (
    <>
      <Link className="linkBtn" to="/">
        Home
      </Link>
      <Top text="Add a new bank card" smalltext="New Card" />
      <Card {...initialCards[0]} />
      <TextInput />
    </>
  );
};

export default AddCard;
