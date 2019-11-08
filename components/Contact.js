import React from "react";

//local imports
import { GenericPageWrapper, Heading1, BodyText } from "./Common/Styles";

const Contact = () => {
  return (
    <GenericPageWrapper>
      <Heading1>Contact Us</Heading1>
      <BodyText>
        email: support@iprhub.io
        <br />
        <br />
        phone: +1 (661) 755-3329
        <br />
        +91 88998-88991
        <br />
        <br />
        {/* Want to go old school? <br />
        write to:  */}
      </BodyText>
    </GenericPageWrapper>
  );
};

export default Contact;
