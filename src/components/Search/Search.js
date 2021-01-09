import React, { useState, useContext } from "react";

import { Context } from "../../context/Context";

const Search = () => {
  const [username, setUsername] = useState("");

  const { getRepositories, loading } = useContext(Context);

  const searchUser = (event) => {
    event.preventDefault();

    getRepositories(username);
  };

  return (
    <form onSubmit={searchUser}>
      <input
        value={username}
        onChange={(event) => setUsername(event.target.value)}
        placeholder="Enter a GitHub username"
        autoFocus
        required
      />
      <button type="submit" disabled={loading}>
        Generate
      </button>
    </form>
  );
};

export default Search;
