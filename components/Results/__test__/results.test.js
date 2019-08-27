import React from "react";
import { shallow } from "enzyme";
import { Results } from "../results";

describe("Results Component", () => {
  let wrapper;
  let mock_props = {};

  beforeEach(() => {
    mock_props = { playerWins: 0, cpuWins: 0 };
    wrapper = shallow(<Results {...mock_props} />);
  });

  it("renders without crashing", () => {
    shallow(<Results {...mock_props} />);
  });
});
