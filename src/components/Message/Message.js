import React from "react";

import "./Message.scss";

const Message = ({ image, title, message }) => {
  return (
    <article className="message container container--extra-small">
      <img src={image} alt={title} className="message__image" />
      <h1 className="message__title">{title}</h1>
      <p className="message__text">{message}</p>
    </article>
  );
};

export default Message;
