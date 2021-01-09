import React, { useContext } from "react";

import { Context } from "../../context/Context";

import Repository from "../Repository/Repository";

const Timeline = () => {
  const { error, data } = useContext(Context);

  const { repositories } = data;

  if (error) {
    return <p>User not found.</p>;
  }

  if (!repositories) {
    return <p>Enter a GitHub user to see a timeline of their repositories.</p>;
  }

  if (!repositories.length) {
    return <p>We couldn't find any repositories for this user.</p>;
  }

  return (
    <section>
      {data.repositories.map((repository) => (
        <Repository key={repository.id} repository={repository} />
      ))}
    </section>
  );
};

export default Timeline;
