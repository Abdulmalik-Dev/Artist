import "./Footer.css";
import { Container, SectionsHeading, Icon } from "../../components/index";
import SocialMediaIconsData from "../../assets/data/SocialMediaIconsData";

const Footer = () => {
  let data = SocialMediaIconsData.map((social) => (
    <Icon
      key={social.id}
      link={social.link}
      icon={social.icon}
      delay={social.delay}
    />
  ));

  return (
    <footer>
      <Container>
        <div className="top">
          <div className="text">
            <SectionsHeading topText="Artist Digital Studio">
              Curabitur quis volutpat elit. Proin sed
              <br />
              sagittis arcu, non tristique libero.
              <br />
              Quisque lobortis nibh eu nisi sodales
              <br />
              gravida.
            </SectionsHeading>
            <div>
              <SectionsHeading topText="Reach Out">
                456 Old Street, New City, ASIA
              </SectionsHeading>
              <SectionsHeading topText="Contact Info">
                abdulmalikkld325@gmail.com Tel: 0592151810
              </SectionsHeading>
            </div>
          </div>
          <div className="newsArea">
            <form>
              <label htmlFor="news">Newsletter</label>
              <input type="email" id="news" placeholder="Your Email Adress" />
              <button>Sign Up</button>
            </form>
          </div>
        </div>
        <div className="bottom">
          <p>Copyright &copy; 2023 Created By Abdulmalik</p>
          <div className="iconsArea">{data}</div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
