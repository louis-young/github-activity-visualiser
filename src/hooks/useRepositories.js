import { useEffect, useState } from "react";

import { fetchRepositories } from "../api/api";

const useRepositories = (user) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [repositories, setRepositories] = useState(null);

  useEffect(() => {
    const getRepositories = async () => {
      try {
        if (!user) return;

        setLoading(true);

        setError(false);

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

    getRepositories();
  }, [user]);

  return { loading, error, repositories };
};

export default useRepositories;
