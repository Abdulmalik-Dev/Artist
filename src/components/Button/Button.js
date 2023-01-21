import "./Button.css";

const Button = (props) => {
  return (
    <button
      className="main-button"
      style={{ backgroundColor: props.bgColor, color: props.color }}
    >
      {props.children}
    </button>
  );
};

export default Button;
