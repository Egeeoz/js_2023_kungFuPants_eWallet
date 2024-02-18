import "../abstracts/button.scss";
import { Link } from 'react-router-dom';

interface Props {
  text: string;
  to: string;
}

const Button = ({ text, to }: Props) => {
  return (
    <section>
      <Link to={to}>
        <button>{text}</button>
      </Link>
    </section>
  );
};

export default Button;

