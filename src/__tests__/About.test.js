import renderer from "react-test-renderer";
import About from "../components/About";
import React from "react";

test("About component renders the about us correctly", () => {
  const rendered = renderer.create(<About />);
  expect(rendered.toJSON()).toMatchSnapshot();
});
