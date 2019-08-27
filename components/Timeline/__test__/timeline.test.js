import React from "react";
import { shallow } from "enzyme";
import { Timeline } from "../timeline";

describe("Timeline Component", () => {
  let wrapper;
  let mock_props = {};

  beforeEach(() => {
    mock_props = { lastPlays: [] };
    wrapper = shallow(<Timeline {...mock_props} />);
  });

  it("renders without crashing", () => {
    shallow(<Timeline {...mock_props} />);
  });

  it("lastPlays have values", () => {
    wrapper.setProps({
      lastPlays: [
        { playerMove: "P", cpuMove: "P" },
        { playerMove: "R", cpuMove: "P" },
        { playerMove: "S", cpuMove: "R" }
      ]
    });
    let eventsCount = wrapper.find(".timeline__event").length;
    expect(eventsCount).toBe(3);
  });
});
