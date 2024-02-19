import Button from "../Components/Button";
import Top from "../Components/Top";
import Card from "../Components/Card"
import CardStack from "../Components/CardStack";
import ButtonLinks from "../constants/ButtonLinks";

const Home = () => {

  const addButton = ButtonLinks.find((link) => link.key === "addNewButton")

  return (
    <>
      <Top text="E-wallet" smalltext="Active card" />
      <Card/>
      <CardStack/>
      {addButton && (
        <Button key={addButton.key} text={addButton.text} to={addButton.to}/>
      )}
    </>
  );
};

export default Home;
