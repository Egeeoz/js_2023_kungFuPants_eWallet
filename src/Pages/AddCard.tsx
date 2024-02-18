import Button from "../Components/Button";
import Top from "../Components/Top";

const AddCard = () => {
  return (
    <>
      <Top text="Add a new bank card" smalltext="New Card" />
      <Button text="Add card" to={"/"} className="addCardBtn"></Button>
    </>
  );
};

export default AddCard;
