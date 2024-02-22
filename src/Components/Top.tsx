import "../abstracts/top.scss";

//Prop types for top component
interface Props {
  smalltext: string;
  text: string;
  icon?: React.ReactNode;
  className?: string;
}

//Top component
const Top = ({ text, smalltext, icon, className }: Props) => {
  return (
    <>
      <section className="head">
        {icon}
        <h1>{text}</h1>
      </section>
      <p className={className}>{smalltext}</p>
    </>
  );
};

export default Top;
