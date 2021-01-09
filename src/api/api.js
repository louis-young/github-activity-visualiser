const fetchRepositories = async (user) => {
  try {
    const endpoint = `/users/${user}/repos?type=public&sort=updated&direction=desc`;

    const url = `${process.env.REACT_APP_API_BASE_URL}${endpoint}`;

    const response = await fetch(url, {
      headers: {
        Authorization: `token ${process.env.REACT_APP_API_TOKEN}`,
      },
    });

    if (!response.ok) throw Error;

    const repositories = await response.json();

    return repositories;
  } catch (error) {
    return error.message;
  }
};

export { fetchRepositories };
