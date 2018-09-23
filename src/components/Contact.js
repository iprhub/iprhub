import React, { Component } from "react";
import axios from "axios";

import { Header, Form } from "semantic-ui-react";

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
      // state = {
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
    // this.setState({ lastName: event.target.value });
    // this.setState({ email: event.target.value });
    // this.setState({ phoneNo: event.target.value });
    // this.setState({ message: event.target.value });
  };
  handleSubmit = () => {
    // const { fn, ln, em, pn, ms } = this.state;

    // this.setState({
    //   firstName: fn,
    //   lastName: ln,
    //   email: em,
    //   phoneNo: pn,
    //   message: ms
    // });
    this.setState({ dataSent: true });
    axios
      .post("http://f5pi.com/sendContactFormAction.php", {
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        email: this.state.email,
        phoneNo: this.state.phoneNo,
        msg: this.state.message
      })

      .then(() => {
        this.setState({ postReport: true });
      })
      .catch(error => {
        this.setState({ postReport: false });
        this.setState({ postFail: this.error });
      });
  };
  // handleChangefirstName = event => {
  //   this.setState({ firstName: event.target.value });
  // };
  // handleChangelastName = event => {
  //   this.setState({ lastName: event.target.value });
  // };
  // handleChangeemail = event => {
  //   this.setState({ email: event.target.value });
  // };
  // handleChangephoneNo = event => {
  //   this.setState({ phoneNo: event.target.value });
  // };
  // handleChangemessage = event => {
  //   this.setState({ message: event.target.value });
  // };

  // handleChange = e => {
  //   this.setState({
  //     [e.target.name]: e.target.value
  //   });
  // };

  sendContactForm = event => {
    event.preventDefault();

    // const firstName = { firstName: this.state.firstName };
    // const { lastName } = this.state;
    // const { email } = this.state;
    // const { phoneNo } = this.state;
    // const { message } = this.state;
    this.setState({ dataSent: true });
    axios
      .post("http://f5pi.com/sendContactFormAction.php", {
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        email: this.state.email,
        phoneno: this.state.phoneNo,
        msg: this.state.message
      })

      .then(() => {
        this.setState({ postReport: true });
      })
      .catch(error => {
        this.setState({ postReport: false });
        this.setState({ postFail: this.error });
      });

    // alert(
    //   "Data submitted to sendContactFormAction.php and stored on cus.txt on f5pi.com"
    // );

    // fetch("http://f5pi.com/sendContactFormAction.php", {
    //   method: "post",
    //   header: {
    //     Accept: "application/json",
    //     "Content-type": "application/json"
    //   },
    //   body: JSON.stringify({
    //     firstName: firstName,
    //     lastName: lastName,
    //     email: email,
    //     phoneno: phoneNo,
    //     msg: message
    //   })
    // })
    //   .then(response => response.json())
    //   .then(responseJson => {
    //     alert(responseJson);
    //   })
    //   .catch(error => {
    //     console.error(error);
    //   });
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
          <Form.Button content="Submit">Submit</Form.Button>
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

      // <form onSubmit={this.sendContactForm}>
      //   <label>
      //     firstName: <input type="text" name="firstName" onChange={this.handleChange} />
      //   </label>
      //   <br />
      //   <label>
      //     lastName: <input type="text" name="lastName" onChange={this.handleChange} />
      //   </label>
      //   <br />
      //   <label>
      //     email: <input type="text" name="email" onChange={this.handleChange} />
      //   </label>
      //   <br />
      //   <label>
      //     <input type="text" name="phoneNo" onChange={this.handleChange} />
      //   </label>
      //   <br />
      //   <label>
      //     <input type="text" name="message" onChange={this.handleChange} />
      //   </label>
      //   <br />
      //   <button type="submit">Send</button>
      // </form>
    );
  }
}
