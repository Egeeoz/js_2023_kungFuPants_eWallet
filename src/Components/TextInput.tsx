import "../abstracts/textInput.scss";
import { useState } from "react";

type InputData = {
  cardNumber: string;
  cardHolderName: string;
  validThru: string;
  ccv: string;
};

const TextInput = () => {
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
  // const creditCardData = [inputData]; var vi vill pusha in våra obj
  return (
    <form className="form">
      <label>
        CARD NUMBER
        <input
          type="text"
          name="cardNumber"
          value={inputData.cardNumber}
          maxLength={16}
          onChange={handleInput}
        />
      </label>
      <label>
        CARDHOLDER NAME
        <input
          type="text"
          placeholder="FIRSTNAME LASTNAME"
          name="cardHolderName"
          value={inputData.cardHolderName}
          onChange={handleInput}
        />
      </label>
      <div className="small-input-container">
        <label>
          Valid Thru
          <input
            className="small-input"
            type="text"
            name="validThru"
            value={inputData.validThru}
            onChange={handleInput}
          />
        </label>
        <label>
          CCV
          <input
            className="small-input"
            type="text"
            name="ccv"
            value={inputData.ccv}
            onChange={handleInput}
          />
        </label>
      </div>
    </form>
  );
};

export default TextInput;
