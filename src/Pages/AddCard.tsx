import Top from "../Components/Top";
import TextInput from "../Components/TextInput";
import { Link } from "react-router-dom";
import Card from "../Components/Card";
import { initialCards } from "../constants/InitialCards";

import "../abstracts/homeIcon.scss";

const AddCard = () => {
  const homeIcon = <Link to="/" className="homeIcon"></Link>;

  return (
    <>
      <Top text="Add a new bank card" smalltext="New Card" icon={homeIcon} />
      <Card {...initialCards[0]} />
      <TextInput />
    </>
  );
};

export default AddCard;
