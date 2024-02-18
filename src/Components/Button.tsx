import "../abstracts/button.scss";
import { Link } from 'react-router-dom';

interface Props {
  text: string;
  to: string;
}

const Button = ({ text, to }: Props) => {
  return (
    <Link to={to}>
        <button className="Btn-add">{text}</button>
      </Link>
  );
};

export default Button;

