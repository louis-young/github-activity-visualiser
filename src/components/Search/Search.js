import React, { useState, useContext } from "react";

import { Context } from "../../context/Context";

import "./Search.scss";

const Search = () => {
  const [username, setUsername] = useState("");

  const { getRepositories, loading } = useContext(Context);

  const searchUser = (event) => {
    event.preventDefault();

    getRepositories(username);
  };

  return (
    <section className="container container--extra-small">
      <form onSubmit={searchUser} className="search">
        <input
          value={username}
          onChange={(event) => setUsername(event.target.value)}
          placeholder="Enter GitHub username"
          autoFocus
          required
          className="search__input"
        />
        <button type="submit" disabled={loading} className="search__submit button">
          Search
        </button>
      </form>
    </section>
  );
};

export default Search;
