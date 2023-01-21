import "./Icon.css";

const Icon = (props) => {
  return (
    <a href={props.link} target="_blank" className="Social-medai-icon">
      <span>{props.icon}</span>
    </a>
  );
};

export default Icon;
