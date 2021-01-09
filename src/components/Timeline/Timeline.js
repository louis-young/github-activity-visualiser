import React, { useContext } from "react";

import { Context } from "../../context/Context";

import Message from "../Message/Message";
import Repository from "../Repository/Repository";
import Spinner from "../Spinner/Spinner";

import visualise from "../../assets/visualise.svg";
import user from "../../assets/user.svg";
import empty from "../../assets/empty.svg";

import "./Timeline.scss";

const Timeline = () => {
  const { loading, error, repositories } = useContext(Context);

  if (loading) {
    return <Spinner />;
  }

  if (error) {
    return <Message image={user} title="User Not Found" message="Please check the username and try again." />;
  }

  if (!repositories) {
    return (
      <Message
        image={visualise}
        title="GitHub Activity Visualised"
        message="Create a visual representation of the user's latest activity."
      />
    );
  }

  if (!repositories.length) {
    return <Message image={empty} title="No Repositories" message="This user has no public repositories." />;
  }

  return (
    <section className="container container--extra-small">
      <ul className="timeline">
        {repositories.map((repository) => (
          <Repository key={repository.id} repository={repository} />
        ))}
      </ul>
    </section>
  );
};

export default Timeline;