import parseLinkHeader from "parse-link-header";

const REPOSITORIES_PER_PAGE = 5;

const DEFAULT_PAGE = 1;

const SORT = "updated";

const fetchRepositories = async (user, page = DEFAULT_PAGE) => {
  try {
    const endpoint = `/users/${user}/repos?type=public&sort=${SORT}&direction=desc&page=${page}&per_page=${REPOSITORIES_PER_PAGE}`;

    const url = `${process.env.REACT_APP_API_BASE_URL}${endpoint}`;

    const response = await fetch(url, {
      headers: {
        Authorization: `token ${process.env.REACT_APP_API_TOKEN}`,
      },
    });

    if (!response.ok) throw Error;

    const data = {};

    data.repositories = await response.json();

    data.pagination = {};

    const linkHeader = response.headers.get("Link");

    if (linkHeader) {
      const parsedLinkHeader = parseLinkHeader(linkHeader);

      data.pagination = parsedLinkHeader;
    }

    return data;
  } catch (error) {
    return error.message;
  }
};

export { fetchRepositories };
