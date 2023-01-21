import "./Header.css";
import { Container, Button, TextWithHeading } from "../../components/index";
import { FaChevronDown } from "react-icons/fa";

const Header = () => {
  setTimeout(() => {
    document.getElementById("moreBtn").addEventListener("click", () =>
      window.scrollTo({
        top:
          document.querySelector(".about-us-section").getBoundingClientRect()
            .y - 50,
        behavior: "smooth",
      })
    );
  }, 100);

  return (
    <Container>
      <header>
        <div className="textArea">
          <TextWithHeading color="#3D3D3F" topText="BEING AN ARTIST">
            Art Studio from Asia passionated in <br />
            creativity since 2018
          </TextWithHeading>
          <span id="moreBtn">
            <Button bgColor="#010101" color="#fff">
              <FaChevronDown />
            </Button>
          </span>
        </div>
      </header>
    </Container>
  );
};
export default Header;
