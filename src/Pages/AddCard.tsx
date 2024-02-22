import Top from "../Components/Top";
import TextInput from "../Components/TextInput";
import { Link } from "react-router-dom";
import Card from "../Components/Card";
import { initialCards } from "../constants/InitialCards";
import homeIcon from "../assets/back-arrow.png";
import "../abstracts/homeIcon.scss";

const AddCard = () => {
  return (
    <>
      <Link className="homeIcon" to="/">
        <img src={homeIcon} alt="Home Icon" width="32px" />
      </Link>
      <Top text="Add a new bank card" smalltext="New Card" />
      <Card {...initialCards[0]} />
      <TextInput />
    </>
  );
};

export default AddCard;
