import "./TextWithHeading.css";

const TextWithHeading = (props) => {
  return (
    <p className="textWithHeading" style={{ color: props.color }}>
      <span>{props.topText}</span>
      {props.children}
    </p>
  );
};

export default TextWithHeading;
