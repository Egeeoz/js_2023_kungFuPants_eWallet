import "../abstracts/top.scss";

//Prop types for top component
interface Props {
  smalltext: string;
  text: string;
  icon?: React.ReactNode;
}

//Top component
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
