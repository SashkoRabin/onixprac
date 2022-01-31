import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className="navbar">
      <Link className="navbar__linkItem" to="/bio">
        Обо мне
      </Link>
      <Link className="navbar__linkItem" to="/api">
        API запросы
      </Link>
      <Link className="navbar__linkItem" to="/jira">
        Jira TODO
      </Link>
      <a
        className="navbar__linkItem"
        target="_blank"
        rel="noreferrer"
        href="https://t.me/rabingym"
      >
        Мой телеграм
      </a>
    </div>
  );
};

export default NavBar;
