import Top from "../Components/Top";
import TextInput from "../Components/TextInput";
import { Link } from "react-router-dom";
import "../abstracts/homeIcon.scss";
import homeIcon from "../assets/back-arrow.png";
const AddCard = () => {
  return (
    <>
      <Link className="homeIcon" to="/">
        <img src={homeIcon} alt="Home Icon" width="30px" />
      </Link>
      <Top text="Add a new bank card" smalltext="New Card" />

      {/* <Card/> */}
      <TextInput />
    </>
  );
};

export default AddCard;
