import "../abstracts/top.scss";
interface Props {
  smalltext: string;
  text: string;
}

const Top = ({ text, smalltext }: Props) => {
  return (
    <>
      <h1>{text}</h1>
      <p>{smalltext}</p>
    </>
  );
};

export default Top;
