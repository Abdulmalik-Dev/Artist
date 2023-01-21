import "./TheInput.css";

const TheInput = (props) => {
  return (
    <props.element
      type={props.type}
      placeholder={props.placeholder}
      required={props.isRequired}
    />
  );
};

export default TheInput;
