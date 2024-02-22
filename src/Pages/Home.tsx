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
import "../abstracts/home.scss";

const Home = () => {
  const addButton = ButtonLinks.find((link) => link.key === "addNewButton");

  // State for notification
  const [showNotification, setShowNotification] = useState(false);

  // State for showing the chosen active card
  const [activeCard, setActiveCard] = useState<CardProps | undefined>(() => {
    const storedValue = localStorage.getItem(key);
    const parsedValue: CardProps[] = storedValue && JSON.parse(storedValue);
    return parsedValue
      ? parsedValue.find((card) => card.active === true)
      : undefined;
  });

  //State for storing cards, if no cards are in localstorage then it shows basic card as active
  const [cards, setCards] = useState<CardProps[]>(() => {
    const storedValue = localStorage.getItem(key);
    if (storedValue) {
      return JSON.parse(storedValue);
    }
    setActiveCard(initialCards[0]);
    return initialCards;
  });

  // Function to delete current active card, also includes function for notification
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

      setShowNotification(true);

      // Hide notification after 3 seconds
      setTimeout(() => {
        setShowNotification(false);
      }, 3000);
    }
  };

  // Setting new active card
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

  // Rendering out card
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(cards));
  }, [cards]);

  // Thrashcan Icon
  const deleteIcon = (
    <div className="deleteIcon" onClick={deleteActiveCard}></div>
  );

  return (
    <section className="homeContainer">
      {/* Conditional rendering for notification */}
      <div className={`notification ${showNotification ? "show" : ""}`}>
        Card has been successfully deleted.
      </div>
      <Top text="E-wallet" smalltext="Active card" icon={deleteIcon} />
      {activeCard ? (
        <Card {...activeCard} />
      ) : (
        <div style={{ minHeight: "241px" }}></div>
      )}
      <CardStack onClick={(nmr) => setNewActiveCard(nmr)} cards={cards} />
      {addButton && (
        <Button key={addButton.key} text={addButton.text} to={addButton.to} />
      )}
    </section>
  );
};

export default Home;
