import React from "react";

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

  return (
    <li>
      <p>{name}</p>
      <p>{description}</p>
      <p>{url}</p>
      <p>{getYearFromTimestamp(timestamp)}</p>
      <p>{getDateFromTimestamp(timestamp)}</p>
    </li>
  );
};

export default Repository;
