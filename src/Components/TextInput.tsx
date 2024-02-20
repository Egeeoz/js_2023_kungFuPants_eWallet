import "../abstracts/textInput.scss";
import { useState } from "react";
import Dropdown from "./DropDownInput";
import "../abstracts/button.scss";
type InputData = {
  cardNumber: string;
  cardHolderName: string;
  validThru: string;
  ccv: string;
};

const TextInput: React.FC = () => {
  const [inputData, setInputData] = useState<InputData>({
    cardNumber: "",
    cardHolderName: "",
    validThru: "",
    ccv: "",
  });
  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    console.log(inputData);

    // creditCardData.push(inputData);
  };
  // const creditCardData = [{inputData,vendorChoice}]; var vi vill pusha in våra obj

  const getTheSelectedVendor = (vendorobj: any) => {
    const allMyCardData = {
      cardHolderName: inputData.cardHolderName,
      cardNumber: inputData.cardNumber,
      ccv: inputData.ccv,
      validThru: inputData.validThru,
      vendorImg: vendorobj.icon,
      vendorName: vendorobj.text,
      vendorBackgroundColor: vendorobj.backgroundColor,
      vendorCardTextColor: vendorobj.cardTextColor,
    };
    console.log(allMyCardData);
    return allMyCardData;
  };
  const handleSubmit = () => {
    console.log(getTheSelectedVendor);
    debugger;
    localStorage.setItem("formData", JSON.stringify(getTheSelectedVendor));
    // Redirect to another page or perform any other action
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
      <Dropdown onGetTheSelectedVendor={getTheSelectedVendor} />
      <button className="addCardBtn" type="submit">
        ADD CARD
      </button>
    </form>
  );
};

export default TextInput;
