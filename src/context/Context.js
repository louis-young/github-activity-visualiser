import React, { createContext, useState } from "react";

import { fetchRepositories } from "../api/api";

export const Context = createContext();

export const ContextProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);

  const [error, setError] = useState(false);

  const [data, setData] = useState({
    repositories: null,
    pagination: {},
  });

  const getRepositories = async (user) => {
    try {
      setError(false);

      setLoading(true);

      const data = await fetchRepositories(user);

      if (!data) throw Error;

      setData(data);
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  const getMoreRepositories = async () => {
    try {
      setLoading(true);

      const user = data.repositories[0].owner.login;

      const { page } = data.pagination.next;

      const newData = await fetchRepositories(user, page);

      if (!data) throw Error;

      setData((data) => ({
        repositories: [...data.repositories, ...newData.repositories],
        pagination: newData.pagination,
      }));
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Context.Provider value={{ loading, error, data, getRepositories, getMoreRepositories }}>
      {children}
    </Context.Provider>
  );
};
