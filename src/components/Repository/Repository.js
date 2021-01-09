import React from "react";

import "./Repository.scss";

const Repository = ({ repository }) => {
  const { name, description, html_url: url, updated_at: timestamp } = repository;

  const getYearFromTimestamp = (timestamp) => {
    const date = new Date(timestamp);

    const year = date.getFullYear();

    return year;
  };

  const getDateFromTimestamp = (timestamp) => {
    const date = new Date(timestamp);

    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();

    const format = `${day}-${month}-${year}`;

    return format;
  };

  const year = getYearFromTimestamp(timestamp);

  const date = getDateFromTimestamp(timestamp);

  return (
    <li className="repository" data-date={year}>
      <a href={url} target="_blank" rel="noopener nofollow noreferrer" className="repository__name">
        {name}
      </a>
      {description && <p className="repository__description">{description}</p>}
      <time className="repository__date" dateTime={date}>
        {date}
      </time>
    </li>
  );
};

export default Repository;
