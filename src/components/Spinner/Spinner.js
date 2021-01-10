import React from "react";

import "./Spinner.scss";

import spinner from "../../assets/loading.svg";

const Spinner = () => {
  return (
    <section className="spinner container container--extra-small">
      <img className="spinner__image" src={spinner} alt="Loading..." />
    </section>
  );
};

export default Spinner;
