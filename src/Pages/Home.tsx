import Button from "../Components/Button";
import Top from "../Components/Top";
import Card from "../Components/Card"
import CardStack from "../Components/CardStack";

const Home = () => {
  return (
    <>
      <Top text="E-wallet" smalltext="Active card" />
      <Card/>
      <CardStack/>
      <Button text="add a new card" to={"/Add"}></Button>
      
    </>
  );
};

export default Home;
