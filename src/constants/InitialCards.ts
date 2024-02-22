import { CardProps } from "../models/CardProps";
import bitcoin from "../assets/bitcoin.png";
export const initialCards: CardProps[] = [
  {
    cardNumber: "XXXXXXXXXXXXXXXX",
    cardHolderName: "FIRSTNAME LASTNAME",
    validThru: "MMYY",
    vendor: "default",
    bgColor: " rgba(208, 208, 208, 1)",
    icon: bitcoin,
    text: "rgba(0, 0, 0,1)",
    active: true,
  },
];
