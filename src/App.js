import React, { useState } from "react";

import useRepositories from "./hooks/useRepositories";

import Search from "./components/Search/Search";
import Timeline from "./components/Timeline/Timeline";
import Header from "./components/Header/Header";

import "./stylesheets/main.scss";

const App = () => {
  const [username, setUsername] = useState("");

  const { loading, error, repositories } = useRepositories(username);

  return (
    <>
      <Search loading={loading} setUsername={setUsername} />
      <Header loading={loading} repositories={repositories} />
      <Timeline loading={loading} error={error} repositories={repositories} />
    </>
  );
};

export default App;
