import Button from "../Components/Button";
import Top from "../Components/Top";

const AddCard = () => {
  return (
    <>
      <Top text="Add a new bank card" />
      <Button text="Add card" to={"/"}></Button>
    </>
  );
};

export default AddCard;
