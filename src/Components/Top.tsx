import "../abstracts/top.scss";

interface Props {
  smalltext: string;
  text: string;
  icon?: React.ReactNode;
}

const Top = ({ text, smalltext, icon }: Props) => {
  return (
    <>
      <section className="head">
        {icon}
        <h1>{text}</h1>
      </section>
      <p>{smalltext}</p>
    </>
  );
};

export default Top;
