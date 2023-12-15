import "./TextWithHeading.css";

const TextWithHeading = (props) => {
  return (
    <div className="textWithHeading" style={{ color: props.color }}>
      <span>{props.topText}</span>
      <p>{props.children}</p>
    </div>
  );
};

export default TextWithHeading;
