import Top from "../Components/Top";
import TextInput from "../Components/TextInput";
import { Link } from "react-router-dom";
import "../abstracts/linkBtn.scss";

const AddCard = () => {
  return (
    <>
      <Link className="linkBtn" to="/">
        Home
      </Link>
      <Top text="Add a new bank card" smalltext="New Card" />
      {/* <Card/> */}
      <TextInput />
    </>
  );
};

export default AddCard;
