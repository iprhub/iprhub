import React, { Component } from "react";
import { Header, Form, Button, Responsive } from "semantic-ui-react";

export default class Contact extends Component {
  state = {
    fname: "",
    lname: "",
    email: "",
    phoneno: "",
    msg: ""
  };

  render() {
    return (
      <div className="centerContent" style={{ padding: "7em 2em" }}>
        <Header
          as="h1"
          textAlign="center"
          style={{ padding: "0em 0em", fontSize: "2.3em" }}
        >
          Contact Us
        </Header>

        <Form unstackable widths="equal">
          <Form.Group>
            <Form.Field>
              <Form.Input
                placeholder="First Name"
                label="First Name:"
                required
                value={this.state.fname}
                autoFocus
              />
            </Form.Field>
            <Form.Field>
              <Form.Input
                placeholder="Last Name"
                label="Laste Name:"
                required
                value={this.state.lname}
              />
            </Form.Field>
          </Form.Group>
          <Form.Group>
            <Form.Field>
              <Form.Input
                label="Email:"
                placeholder="your-name@xyz.com"
                required
                type="email"
                value={this.state.email}
              />
            </Form.Field>
            <Form.Field>
              <Form.Input
                label="Phone Number:"
                placeholder="Your Contact Number"
                value={this.state.phoneno}
              />
            </Form.Field>
          </Form.Group>
          <Form.Field inline>
            <Form.TextArea
              label="Message:"
              placeholder="Your Message"
              required
              value={this.state.msg}
            />
          </Form.Field>
          <Button type="submit">Submit</Button>
        </Form>
        {/* </Responsive> */}
        <Responsive maxWidth={Responsive.onlyMobile.maxWidth} />
        <Header as="h5">
          {" "}
          You can also reach us at{" "}
          <a href="mailto:hello@iprhub.io">hello@iprhub.io</a>
        </Header>
      </div>
    );
  }
}
