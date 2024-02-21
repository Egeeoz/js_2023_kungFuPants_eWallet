import { Option } from "../models/OptionProps";
import bitcoin from "../assets/bitcoin.png";
import ninja from "../assets/ninja.png";
import evil from "../assets/evil.png";
import chain from "../assets/chain.png";


const options: Option[] = [
    {
      icon: bitcoin,
      text: "BITCOIN INC",
      backgroundColor: "rgba(255, 174, 52, 1)",
      color: "rgba(0, 0, 0, 1)",
    },
    {
      icon: ninja,
      text: "NINJA BANK",
      backgroundColor: "rgba(34, 34, 34, 1)",
      color: "rgba(255, 255, 255, 1)",
    },
    {
      icon: chain,
      text: "BLOCK CHAIN INC",
      backgroundColor: "rgba(139, 88, 249, 1)",
      color: "rgba(255, 255, 255, 1)",
    },
    {
      icon: evil,
      text: "EVIL CORP",
      backgroundColor: "rgba(243, 51, 85, 1)",
      color: "rgba(255, 255, 255, 1)",
    },
  ];

  export default options