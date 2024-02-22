import "../abstracts/dropdown.scss";
import "../abstracts/_variables.scss";
import React, { useState } from "react";
import bitcoin from "../assets/bitcoin.png";
import ninja from "../assets/ninja.png";
import evil from "../assets/evil.png";
import chain from "../assets/chain.png";
import whiteImg from "../assets/white.icon.jpg";

interface Option {
  vendor: string;
  icon: string;
  text: string;
  bgColor: string;
  color: string;
}

interface DropDownProps {
  onGetTheSelectedVendor: (obj: Option) => void;
}

const Dropdown: React.FC<DropDownProps> = ({ onGetTheSelectedVendor }) => {
  const [isActive, setIsActive] = useState(false);
  const [selectedOption, setSelectedOption] = useState({
    icon: whiteImg,
    vendor: "default",
    text: "",
    bgColor: "",
    color: "",
  });

  const options: Option[] = [
    {
      vendor: "bitcoin",
      icon: bitcoin,
      text: "BITCOIN INC",
      bgColor: "rgba(255, 174, 52, 1)",
      color: "rgba(0, 0, 0, 1)",
    },
    {
      vendor: "ninja",
      icon: ninja,
      text: "NINJA BANK",
      bgColor: "rgba(34, 34, 34, 1)",
      color: "rgba(255, 255, 255, 1)",
    },
    {
      vendor: "chain",
      icon: chain,
      text: "BLOCK CHAIN INC",
      bgColor: "rgba(139, 88, 249, 1)",
      color: "rgba(255, 255, 255, 1)",
    },
    {
      vendor: "evil",
      icon: evil,
      text: "EVIL CORP",
      bgColor: "rgba(243, 51, 85, 1)",
      color: "rgba(255, 255, 255, 1)",
    },
  ];
  const getVendorSelection = (option: Option) => {
    return (
      <>
        <div className="img-box" style={{ backgroundColor: option.bgColor }}>
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
            style={{ backgroundColor: selectedOption.bgColor }}
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
    onGetTheSelectedVendor(option);
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
