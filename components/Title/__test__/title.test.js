import React from "react";
import { shallow } from "enzyme";
import { Title } from "../title";

describe("Title Component", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Title />);
  });

  it("renders without crashing", () => {
    shallow(<Title />);
  });
});
