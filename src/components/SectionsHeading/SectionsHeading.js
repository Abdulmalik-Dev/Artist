import "./SectionsHeading.css";

const SectionsHeading = (props) => {
  return (
    <p className="sectionsHeading">
      <span>{props.topText}</span>
      {props.children}
    </p>
  );
};

export default SectionsHeading;
