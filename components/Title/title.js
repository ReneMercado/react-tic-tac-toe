import React from "react";
import "./title.scss";

export const Title = () => {
  return (
    <header className="title">
      <span className="title__rock">Rock</span>
      <span>, </span>
      <span className="title__paper">Paper</span>
      <span> & </span>
      <span className="title__scissors">Scissors</span>
      <hr />
    </header>
  );
};

export default Title;
