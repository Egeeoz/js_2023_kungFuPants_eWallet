import "../abstracts/dropdown.scss";
import "../abstracts/_variables.scss";
import React, { useState } from "react";
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

  const options: Option[] = [
    { icon: bitcoin, text: "BITCOIN INC", color: "rgba(255, 174, 52, 1)" },
    { icon: ninja, text: "NINJA BANK", color: "rgba(34, 34, 34, 1)" },
    { icon: chain, text: "BLOCK CHAIN INC", color: "rgba(139, 88, 249, 1)" },
    { icon: evil, text: "EVIL CORP", color: "rgba(243, 51, 85, 1)" },
  ];

  const toggleDropdown = () => {
    setIsActive(!isActive);
  };

  return (
    <>
      <div className="dropdown-wrapper">
        <p className="vendor">VENDOR</p>
        <div className="dropdown-container">
          <div className={`dropdown ${isActive ? "active" : ""}`}>
            <div className="input-container">
              <button className="dropbtn" onClick={toggleDropdown}>
                &#9660;
              </button>
            </div>
            <div className="dropdown-content">
              {options.map((option, index) => (
                <a href="#" key={index}>
                  <div
                    className="img-box"
                    style={{ backgroundColor: option.color }}
                  >
                    <img className="img-icon" src={option.icon} />
                  </div>
                  <span>{option.text}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dropdown;
