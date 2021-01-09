import React, { createContext, useState } from "react";

import { fetchRepositories } from "../api/api";

export const Context = createContext();

export const ContextProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [repositories, setRepositories] = useState(null);

  const getRepositories = async (user) => {
    try {
      setError(false);

      setLoading(true);

      const repositories = await fetchRepositories(user);

      if (!repositories) throw Error;

      setRepositories(repositories);
    } catch (error) {
      setRepositories(null);

      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return <Context.Provider value={{ loading, error, repositories, getRepositories }}>{children}</Context.Provider>;
};
