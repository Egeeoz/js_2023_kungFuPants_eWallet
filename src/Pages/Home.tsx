import Button from "../Components/Button";
import Top from "../Components/Top";
import Card from "../Components/Card";
import CardStack from "../Components/CardStack";
import ButtonLinks from "../constants/ButtonLinks";
import "../abstracts/deleteIcon.scss";
import { useEffect, useState } from "react";
import { CardProps } from "../models/CardProps";
import { key } from "../constants/LocalStorageKey";
import { initialCards } from "../constants/InitialCards";

// Thrashcan Icon
const deteleIcon = <a className="deleteIcon" href=""></a>;

const Home = () => {
  const addButton = ButtonLinks.find((link) => link.key === "addNewButton");
  const [cards, setCards] = useState<CardProps[]>(() => {
    const storedValue = localStorage.getItem(key);
    return storedValue ? JSON.parse(storedValue) : initialCards;
  });
  console.log("JSON.stringify(initalCards", JSON.stringify(initialCards));
  const [activeCard, setActiveCard] = useState<CardProps | undefined>(() => {
    const storedValue = localStorage.getItem(key);
    const parsedValue: CardProps[] = storedValue && JSON.parse(storedValue);
    return parsedValue
      ? parsedValue.find((card) => card.active === true)
      : undefined;
  });

  const setNewActiveCard = (cardNumber: string) => {
    setCards((prevCards) => {
      const updatedCards = prevCards.map((card) => ({
        ...card,
        active: cardNumber === card.cardNumber,
      }));
      const newActiveCard = updatedCards.find((card) => card.active);

      setActiveCard(newActiveCard);
      return updatedCards;
    });
  };

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(cards));
  }, [cards]);

  return (
    <>
      <Top text="E-wallet" smalltext="Active card" icon={deteleIcon} />
      {activeCard ? <Card {...activeCard} /> : null}
      <CardStack onClick={(nmr) => setNewActiveCard(nmr)} cards={cards} />
      {addButton && (
        <Button key={addButton.key} text={addButton.text} to={addButton.to} />
      )}
    </>
  );
};

export default Home;
