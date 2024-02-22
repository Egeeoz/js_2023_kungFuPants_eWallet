import { Option  } from "../models/OptionProps";
import bitcoin from "../assets/bitcoin.png";
import ninja from "../assets/ninja.png";
import evil from "../assets/evil.png";
import chain from "../assets/chain.png";


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

  export default options