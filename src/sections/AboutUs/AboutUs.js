import "./AboutUs.css";
import { Container, TextWithHeading } from "../../components/index";
import img from "../../assets/images/about-image.jpg";

const AboutUs = () => {
  // Animation Info
  let start = 100,
    end = 0,
    time = 0.5;

  return (
    <Container>
      <div className="about-us-section">
        <div className="left">
          <img src={img} alt="" />
          <h3>Interested to Work?</h3>
          <p>
            Sed varius augue nec pharetra
            <br />
            scelerisque. Maecenas sapien ex, rutrum
            <br />
            sit amet dapibus eu, tincidunt vitae nulla.
          </p>

          <a href="mailto:abdulmalikkld325@gmail.com" target="_blank">
            abdulmalikkld325@gmail.com
          </a>
        </div>
        <div className="right">
          <TextWithHeading
            color="var(--gray-darkest)"
            topText="WE MAKE THINGS BETTER"
          >
            Curabitur tristique ante non <br /> malesuada dignissim
          </TextWithHeading>

          <p className="theText">
            Credit goes to <a href="#">Unsplash</a> for images used in this
            artist web page. Please tell
            <br />
            your friends about Tooplate website. You can feel free to use this
            template
            <br />
            as you wish. Fusce quis fermentum enim, at rutrum enim.
            <br />
            Sed tellus metus, laoreet eu turpis vel, sollicitudin feugiat
            libero. Ut ligula augue, <br />
            condimentum a purus hendrerit, suscipit vehicula dui. Sed non purus
            purus.
            <br />
            Mauris nunc lectus, porta pellentesque nisl nec, porttitor ultricies
            purus.
          </p>
        </div>
      </div>
    </Container>
  );
};

export default AboutUs;
