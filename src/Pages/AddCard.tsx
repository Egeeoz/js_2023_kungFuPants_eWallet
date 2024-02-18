import Button from "../Components/Button";
import Top from "../Components/Top";
import Card from "../Components/Card";
import TextInput from "../Components/TextInput";
import DropDownInput from "../Components/DropDownInput";


const AddCard = () => {
  return (
    <>
    <Top text="Add a new bank card" smalltext="New Card" />
      <Card/>
      <TextInput/>
      <DropDownInput/>
      
      <Button text="Add card" to={"/"}></Button>
    </>
  );
};

export default AddCard;
