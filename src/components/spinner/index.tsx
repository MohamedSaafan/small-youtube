import React from "react";
import "./spinner.scss";
interface Props {}

const Spinner: React.FC<{}> = (props) => {
  const spans = [];
  for (let i = 1; i <= 20; i++) {
    spans.push(
      <span style={{ "--i": i } as React.CSSProperties} key={i}></span>
    );
  }
  return (
    <section className="loader">
      <div className="loader__container">{spans}</div>
    </section>
  );
};
export default Spinner;
