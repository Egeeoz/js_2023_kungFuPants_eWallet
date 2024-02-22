import "../abstracts/textInput.scss";
import { useState } from "react";
import Dropdown from "./DropDownInput";
import "../abstracts/button.scss";
import { key } from "../constants/LocalStorageKey";

type InputData = {
  cardNumber: string;
  cardHolderName: string;
  validThru: string;
  ccv: string;
  vendor?: any;
};

const TextInput: React.FC = () => {
  const [inputData, setInputData] = useState<InputData>({
    cardNumber: "",
    cardHolderName: "",
    validThru: "",
    ccv: "",
  });
  const [selectedVendor, setSelectedVendor] = useState<any | null>(null);
  const cards: InputData[] = JSON.parse(localStorage.getItem(key) as string); // Array to hold card objects

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!selectedVendor) {
      console.error("Please select a vendor.");
      return;
    }

    const newCard = {
      ...inputData,
      vendor: selectedVendor.vendor,
      bgColor: selectedVendor.bgColor,
    };

    cards.push(newCard);
    console.log(cards); // Add the new card to the array
    // setCards(updatedCards);
    localStorage.setItem(
      "cards",
      JSON.stringify(cards.filter((c) => !c.cardNumber.includes("X")))
    );
    // Redirect to another page or perform any other action
    console.log(e);
    setTimeout(function () {
      window.location.reload();
    }, 500);
  };

  const handleVendorSelection = (vendor: any) => {
    setSelectedVendor(vendor);
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <label>
        CARD NUMBER
        <input
          required
          type="text"
          name="cardNumber"
          value={inputData.cardNumber}
          maxLength={16}
          pattern="[0-9]*"
          onChange={handleInput}
        />
      </label>
      <label>
        CARDHOLDER NAME
        <input
          required
          type="text"
          placeholder="FIRSTNAME LASTNAME"
          name="cardHolderName"
          value={inputData.cardHolderName}
          pattern="[A-Za-z ]+"
          onChange={handleInput}
        />
      </label>
      <div className="small-input-container">
        <label>
          Valid Thru
          <input
            required
            className="small-input"
            type="text"
            name="validThru"
            maxLength={4}
            pattern="[0-9]*"
            value={inputData.validThru}
            onChange={handleInput}
          />
        </label>
        <label>
          CCV
          <input
            required
            className="small-input"
            type="text"
            name="ccv"
            pattern="[0-9]*"
            maxLength={3}
            value={inputData.ccv}
            onChange={handleInput}
          />
        </label>
      </div>
      <Dropdown onGetTheSelectedVendor={handleVendorSelection} />
      <button className="addCardBtn" type="submit">
        ADD CARD
      </button>
    </form>
  );
};

export default TextInput;
