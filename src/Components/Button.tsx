import "../abstracts/button.scss";
import { Link } from "react-router-dom";

interface Props {
  text: string;
  to: string;
  className?: string;
}

const Button = ({ text, to, className }: Props) => {
  return (
    <Link to={to}>
      <button className={className}>{text}</button>
    </Link>
  );
};

export default Button;
