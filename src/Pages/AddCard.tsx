import Button from "../Components/Button";
import Top from "../Components/Top";
import Card from "../Components/Card";
import TextInput from "../Components/TextInput";
import ButtonLinks from "../constants/ButtonLinks";

const AddCard = () => {
  const addButton = ButtonLinks.find((link) => link.key === "addButton");

  return (
    <>
      <Top text="Add a new bank card" smalltext="New Card" />
      <Card />
      <TextInput />
    </>
  );
};

export default AddCard;
