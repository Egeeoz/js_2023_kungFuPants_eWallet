import Button from "../Components/Button";
import Top from "../Components/Top";
import Card from "../Components/Card";
import TextInput from "../Components/TextInput";
import DropDownInput from "../Components/DropDownInput";
import ButtonLinks from "../constants/ButtonLinks";

const AddCard = () => {
  const addButton = ButtonLinks.find((link) => link.key === "addButton");

  return (
    <>
      <Top text="Add a new bank card" smalltext="New Card" />
      <Card />
      <TextInput />
      <DropDownInput />
      {addButton && (
        <Button
          key={addButton.key}
          text={addButton.text}
          to={addButton.to}
          className="addCardBtn"
        />
      )}
    </>
  );
};

export default AddCard;
