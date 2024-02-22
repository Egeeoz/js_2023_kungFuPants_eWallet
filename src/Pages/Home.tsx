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
// const deteleIcon = <a className="deleteIcon" href=""></a>;

const Home = () => {
  const addButton = ButtonLinks.find((link) => link.key === "addNewButton");

  const [activeCard, setActiveCard] = useState<CardProps | undefined>(() => {
    const storedValue = localStorage.getItem(key);
    const parsedValue: CardProps[] = storedValue && JSON.parse(storedValue);
    return parsedValue
      ? parsedValue.find((card) => card.active === true)
      : undefined;
  });

  const [cards, setCards] = useState<CardProps[]>(() => {
    const storedValue = localStorage.getItem(key);
    console.log(storedValue);
    if (storedValue) {
      return JSON.parse(storedValue);
    }
    setActiveCard(initialCards[0]);
    return initialCards;
  });
  // console.log("JSON.stringify(initalCards", JSON.stringify(initialCards));

  const deleteActiveCard = () => {
    if (activeCard) {
      // Filter out the active card and update the state with the remaining cards
      const updatedCards = cards.filter(
        (card) => card.cardNumber !== activeCard.cardNumber
      );
      setCards(updatedCards);

      // Find the next card to set as active or set to undefined if no cards left
      const nextActiveCard =
        updatedCards.length > 0 ? updatedCards[0] : undefined;
      if (nextActiveCard) {
        // If there's a card to set as active, update its active property
        nextActiveCard.active = true;
      }
      setActiveCard(nextActiveCard);

      // Update localStorage with the new set of cards
      localStorage.setItem(key, JSON.stringify(updatedCards));
    }
  };

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

  const deleteIcon = (
    <div className="deleteIcon" onClick={deleteActiveCard}></div>
  );

  return (
    <>
      <Top text="E-wallet" smalltext="Active card" icon={deleteIcon} />
      {activeCard ? <Card {...activeCard} /> : <div style={{ minHeight: '241px' }}></div>}
      <CardStack onClick={(nmr) => setNewActiveCard(nmr)} cards={cards} />
      {addButton && (
        <Button key={addButton.key} text={addButton.text} to={addButton.to} />
      )}
    </>
  );
};

export default Home;