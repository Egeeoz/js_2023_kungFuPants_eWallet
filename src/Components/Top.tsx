import "../abstracts/top.scss";
interface Props {
  text: string;
}

const Top = ({ text }: Props) => {
  return <h1>{text}</h1>;
};

export default Top;
