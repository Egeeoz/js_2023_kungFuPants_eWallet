import Button from "../Components/Button";
import Top from "../Components/Top";

const Home = () => {
  return (
    <>
      <Top text="E-wallet" />
      <Button text="add a new card" to={"/Add"}></Button>
    </>
  );
};

export default Home;
