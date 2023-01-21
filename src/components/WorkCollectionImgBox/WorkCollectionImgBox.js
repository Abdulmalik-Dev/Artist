import "./WorkCollectionImgBox.css";

const WorkCollectionImgBox = (props) => {
  return (
    <div className="workCollectionImgBox">
      <img src={props.img} alt="" />
      <p>{props.category}</p>
    </div>
  );
};

export default WorkCollectionImgBox;
