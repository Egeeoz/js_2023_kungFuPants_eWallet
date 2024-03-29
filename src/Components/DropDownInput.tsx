import "../abstracts/dropdown.scss";
import "../abstracts/_variables.scss";
import React, { useState } from "react";
import whiteImg from "../assets/white.icon.jpg";
import options from "../constants/DropDownOption";
import arrowDown from "../assets/arrowDown.png";

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

          <img src={arrowDown} alt="Drop down arrow" />
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
