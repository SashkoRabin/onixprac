import React from 'react';
import { Link } from 'react-router-dom';
const AnotherNavBar = () => {
  return (
    <nav className="menu">
      <ul className="menu__list">
        <li>
          <a
            href="*"
            onClick={(e) => e.preventDefault()}
            className="menu__link"
          >
            Menu
          </a>
          <ul className="sub-menu__list">
            <li>
              <Link className="sub-menu__link" to="/bio">
                Обо мне
              </Link>
              <Link className="sub-menu__link" to="/api">
                API запросы
              </Link>
              <a
                className="sub-menu__link"
                target="_blank"
                rel="noreferrer"
                href="https://t.me/rabingym"
              >
                Мой телеграм
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  );
};

export default AnotherNavBar;
