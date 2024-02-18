import "../abstracts/button.scss";
interface Props {
  text: string;
}

const Button = ({ text }: Props) => {
  return (
    <section>
      <button>{text}</button>
    </section>
  );
};

export default Button;
