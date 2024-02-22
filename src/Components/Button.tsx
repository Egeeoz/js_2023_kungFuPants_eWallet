import "../abstracts/button.scss";
import { Link } from "react-router-dom";

//Prop types for button component
interface Props {
  text: string;
  to: string;
  className?: string;
}
//Button component
const Button = ({ text, to, className }: Props) => {
  return (
    <Link to={to}>
      <button className={className}>{text}</button>
    </Link>
  );
};

export default Button;
