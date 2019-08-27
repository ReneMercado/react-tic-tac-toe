import React from "react";
import { shallow } from "enzyme";
import { Options } from "../options";

describe("Options Component", () => {
  let wrapper;
  let mock_props = {};

  beforeEach(() => {
    mock_props = { lastCPUMove: null, loading: false, generateMatch: jest.fn() };
    wrapper = shallow(<Options {...mock_props} />);
  });

  it("renders without crashing", () => {
    shallow(<Options {...mock_props} />);
  });

  it("lastCPUMove prop has  value", () => {
    wrapper.setProps({
      lastCPUMove: {
        reason: "Test Reason"
      }
    });
    expect(wrapper.find(".cpu-reason").length).toBe(1);
  });

  it("lastCPUMove prop doesn't have value", () => {
    expect(wrapper.find(".cpu-reason").length).toBe(0);
  });

  it("options__rock is clicked", () => {
    wrapper.find(".options__rock").simulate("click");
    expect(mock_props.generateMatch).toHaveBeenCalledWith("R");
  });

  it("options__paper is clicked", () => {
    wrapper.find(".options__paper").simulate("click");
    expect(mock_props.generateMatch).toHaveBeenCalledWith("P");
  });

  it("options__scissors is clicked", () => {
    wrapper.find(".options__scissors").simulate("click");
    expect(mock_props.generateMatch).toHaveBeenCalledWith("S");
  });

  it("generateMatch is not called when loading is true", () => {
    wrapper.setProps({ loading: true });
    wrapper.find(".options__scissors").simulate("click"); //NOT WORKING USING .first("img").simulate("click"), we can use instance() and call the onClickOption directly
    expect(mock_props.generateMatch).toHaveBeenCalledTimes(0);
  });
});
