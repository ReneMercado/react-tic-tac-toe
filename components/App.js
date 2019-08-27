import React, { Component } from "react";
import "../assets/css/styles.scss";
import Options from "./Options/optionsContainer";
import Title from "./Title/title";
import Results from "./Results/resultsContainer";
import Timeline from "./Timeline/timelineContainer";

export default class App extends Component {
  render() {
    return (
      <div className="app">
        <Title />
        <Options />
        <Results />
        <Timeline />
      </div>
    );
  }
}
