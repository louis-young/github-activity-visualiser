import React, { useContext } from "react";

import { Context } from "../../context/Context";

const Header = () => {
  const { data } = useContext(Context);

  const { repositories } = data;

  if (!repositories || !repositories.length) {
    return null;
  }

  const owner = repositories[0].owner;

  const { login: username, avatar_url: avatar, html_url: profile } = owner;

  return (
    <header>
      <img src={avatar} alt={username} />
      <a href={profile} target="_blank" rel="noopener nofollow noreferrer">
        {username}
      </a>
    </header>
  );
};

export default Header;
