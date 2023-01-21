import "./Contact.css";
import {
  Container,
  SectionsHeading,
  TheForm,
  TheInput,
} from "../../components/index";
import ContactInputsData from "../../assets/data/ContactInputsData";

const Contact = () => {
  let data = ContactInputsData.map((ContactData) => (
    <TheInput
      key={ContactData.id}
      element={ContactData.element}
      type={ContactData.type}
      placeholder={ContactData.placeholder}
      isRequired={ContactData.isRequired}
    />
  ));

  return (
    <div className="Contact">
      <Container>
        <SectionsHeading topText="Get in touch">
          Quisque lobortis nibh eu nisi sodales gravida. Sed vehicula mauris in
          orci vehicula, at luctus mauris hendrerit. Fusce aliquet quis
          <br />
          ante ac pretium. Donec quis nibh sed elit rhoncus condimentum.
        </SectionsHeading>
        <TheForm btnText="Send Message">{data}</TheForm>
      </Container>
    </div>
  );
};

export default Contact;
