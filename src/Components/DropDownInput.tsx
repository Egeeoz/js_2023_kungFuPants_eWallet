import "../abstracts/dropdown.scss";
import "../abstracts/_variables.scss";
import React, { useState, useRef } from "react";
import bitcoin from "../assets/bitcoin.png";
import ninja from "../assets/ninja.png";
import evil from "../assets/evil.png";
import chain from "../assets/chain.png";

interface Option {
  icon: string;
  text: string;
  color: string;
}

const Dropdown: React.FC = () => {
  const [isActive, setIsActive] = useState(false);
  const [selectedOption, setSelectedOption] = useState({
    icon: "",
    text: "",
    color: "",
  });

  const options: Option[] = [
    { icon: bitcoin, text: "BITCOIN INC", color: "rgba(255, 174, 52, 1)" },
    { icon: ninja, text: "NINJA BANK", color: "rgba(34, 34, 34, 1)" },
    { icon: chain, text: "BLOCK CHAIN INC", color: "rgba(139, 88, 249, 1)" },
    { icon: evil, text: "EVIL CORP", color: "rgba(243, 51, 85, 1)" },
  ];
  const getVendorSelection = (option: Option) => {
    return (
      <>
        <div className="img-box" style={{ backgroundColor: option.color }}>
          <img className="img-icon" src={option.icon} />
        </div>
        <span>{option.text}</span>
      </>
    );
  };
  const toggleDropdown = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    setIsActive(!isActive);
    e.preventDefault();
  };

  const createButton = () => {
    return (
      <>
        <button className="dropbtn" onClick={(e) => toggleDropdown(e)}>
          <div
            className="img-box"
            style={{ backgroundColor: selectedOption.color }}
          >
            <img className="img-icon" src={selectedOption.icon} />
          </div>
          <span>{selectedOption.text}</span>

          <span>&#9660;</span>
        </button>
      </>
    );
  };

  const handleVendorChoice = (option: Option) => {
    setSelectedOption(option);
    setIsActive(false);
  };
  return (
    <div className="dropdown-wrapper">
      <p className="vendor">VENDOR</p>
      <div className="dropdown-container">
        <div className={`dropdown ${isActive ? "active" : ""}`}>
          <div className="input-container">{createButton()}</div>
          <div className="dropdown-content">
            {options.map((option, index) => (
              <a
                onClick={() => handleVendorChoice(option)}
                href="#"
                key={index}
              >
                {getVendorSelection(option)}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
