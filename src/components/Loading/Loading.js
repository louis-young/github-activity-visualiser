import React from "react";

import "./Loading.scss";

import loading from "../../assets/loading.svg";

const Loading = () => {
  return (
    <section className="loading container container--extra-small">
      <img className="loading__image" src={loading} alt="Loading..." />
    </section>
  );
};

export default Loading;
