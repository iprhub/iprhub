import React, { Component } from "react";
import axios from "axios";

import { Header, Form, Container, Divider } from "semantic-ui-react";

const PostMsg = ({ err }) =>
  err ? (
    <div>
      <Header as="h3" textAlign="center" style={{ color: "red" }}>
        Error while submitting your info. If possible, kindly send us the
        screenshot of this page at bugs@iprhub.io...
      </Header>
    </div>
  ) : (
    <Header as="h3" textAlign="center" style={{ color: "green" }}>
      Thank you, we will get back to you soon with the info provided...
    </Header>
  );

export default class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      phoneNo: "",
      message: "",
      postReport: true,
      dataSent: false,
      postFail: "",
      postFail2: "Error Uncaught"
    };
    this.sendContactForm = this.sendContactForm.bind(this);
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = () => {
    axios
      .post("http://f5pi.com/sendContactFormAction.php", {
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        email: this.state.email,
        phoneNo: this.state.phoneNo,
        msg: this.state.message
      })
      .then(() => {
        this.setState({ postReport: true, dataSent: true });
      })
      .catch(error => {
        this.setState({ postReport: false });
        this.setState({ postFail: this.error });
      });
  };

  sendContactForm = event => {
    event.preventDefault();
    axios
      .post("http://f5pi.com/sendContactFormAction.php", {
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        email: this.state.email,
        phoneno: this.state.phoneNo,
        msg: this.state.message
      })
      .then(() => {
        this.setState({ postReport: true, dataSent: true });
      })
      .catch(error => {
        this.setState({ postReport: false });
        this.setState({ postFail: this.error });
      });
  };

  render() {
    return (
      <Container>
      <div className="centerContent" style={{ padding: "7em 2em" }}>
        <Header
          as='h2'
          textAlign="left"
          style={{ padding: "0em 0em" }}
          >
          Contact Us
        </Header>
        <Divider />
        <Form unstackable widths="equal" onSubmit={this.handleSubmit}>
          <Form.Group>
            <Form.Field>
              <Form.Input
                placeholder="First Name"
                label="First Name:"
                name="firstName"
                required
                value={this.state.firstName}
                onChange={this.handleChange}
                autoFocus
              />
            </Form.Field>
            <Form.Field>
              <Form.Input
                placeholder="Last Name"
                label="Laste Name:"
                name="lastName"
                required
                value={this.state.lastName}
                onChange={this.handleChange}
              />
            </Form.Field>
          </Form.Group>
          <Form.Group>
            <Form.Field>
              <Form.Input
                label="Email:"
                placeholder="your-name@xyz.com"
                name="email"
                required
                type="email"
                value={this.state.email}
                onChange={this.handleChange}
              />
            </Form.Field>
            <Form.Field>
              <Form.Input
                label="Phone Number:"
                placeholder="Your Contact Number"
                name="phoneNo"
                value={this.state.phoneNo}
                onChange={this.handleChange}
              />
            </Form.Field>
          </Form.Group>
          <Form.Field inline>
            <Form.TextArea
              label="Message:"
              placeholder="Your Message"
              name="message"
              required
              value={this.state.message}
              onChange={this.handleChange}
            />
          </Form.Field>
          <Form.Button type="Submit">Submit</Form.Button>
        </Form>
        {this.state.dataSent ? (
          !this.state.postReport ? (
            <div>
              <PostMsg err />
              <p>
                {this.state.postFail
                  ? this.state.postFail
                  : this.state.postFail2}
              </p>
            </div>
          ) : (
            <PostMsg />
          )
        ) : null}
        <Header as="h5">
          {" "}
          You can also reach us at{" "}
          <a href="mailto:hello@iprhub.io">hello@iprhub.io</a>
        </Header>
      </div>
      </Container>
    );
  }
}
