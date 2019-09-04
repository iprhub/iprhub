import React from 'react';

//local imports
import { GenericPageWrapper, Heading1, BodyText } from './Common/Styles';

const Contact = () => {
  return (
    <GenericPageWrapper>
      <Heading1>Contact Us</Heading1>
      <BodyText>
        email: hello@iprhub.io<br/>
        phone: +1 (661) 755-3329<br /><br />
        {/* Want to go old school? <br />
        write to:  */}
      </BodyText>
    </GenericPageWrapper>
  );
};

export default Contact;
