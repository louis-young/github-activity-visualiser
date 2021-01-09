import React, { useContext } from "react";

import { Context } from "../../context/Context";

const Pagination = () => {
  const { loading, data, getMoreRepositories } = useContext(Context);

  const { pagination } = data;

  console.log(pagination);

  if (!pagination?.next) {
    return null;
  }

  return (
    <button onClick={getMoreRepositories} disabled={loading}>
      Load More
    </button>
  );
};

export default Pagination;
