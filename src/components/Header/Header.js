import React from "react";

import "./Header.scss";

const Header = ({ loading, repositories }) => {
  if (loading || !repositories || !repositories.length) {
    return null;
  }

  const user = repositories[0].owner;

  const { login: username, avatar_url: avatar, html_url: profile } = user;

  return (
    <header className="header">
      <img src={avatar} alt={username} className="header__image" />
      <a href={profile} target="_blank" rel="noopener nofollow noreferrer" className="header__link">
        {username}
      </a>
      's latest activity
    </header>
  );
};

export default Header;
