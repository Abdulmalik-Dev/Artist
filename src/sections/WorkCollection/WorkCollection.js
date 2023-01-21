import "./WorkCollection.css";
import {
  Container,
  SectionsHeading,
  WorkCollectionImgBox,
} from "../../components/index";
import WorkCollectionData from "../../assets/data/WorkCollectionData";

const WorkCollection = () => {
  let data = WorkCollectionData.map((workData) => (
    <WorkCollectionImgBox
      key={workData.id}
      category={workData.category}
      img={workData.img}
    />
  ));

  return (
    <div className="workCollection">
      <Container>
        <SectionsHeading topText="Work Collection">
          Morbi sit amet erat ullamcorper, varius erat at, vehicula massa.
          Phasellus vel vestibulum purus. Sed id sollicitudin ex, id eleifend
          purus. Nulla id fermentum nisl, vel tincidunt orci. Curabitur
          tristique ante non malesuada dignissim. Pellentesque id odio vitae
          enim efficitur ornare a non metus.
        </SectionsHeading>
        <div className="images">{data}</div>
      </Container>
    </div>
  );
};

export default WorkCollection;
