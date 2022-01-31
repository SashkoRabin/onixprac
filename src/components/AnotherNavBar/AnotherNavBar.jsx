import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const AnotherNavBar = ({ checked, setChecked }) => {
  const setCheck = () => {
    if (checked) {
      setChecked(false);
    } else {
      setChecked(true);
    }
  };
  return (
    <nav>
      <div className="anav">
        <div className="anav__container">
          <input
            onChange={setCheck}
            type="checkbox"
            className="anav__checkbox"
          />
          <div className="anav__hamburger_lines">
            <span className="line line1"></span>
            <span className="line line2"></span>
            <span className="line line3"></span>
          </div>
          <div className="anav__menu-items">
            <li>
              <Link to="/bio">Обо мне</Link>
            </li>
            <li>
              <Link to="/api">API запросы</Link>
            </li>
            <li>
              <Link to="/jira">Jira TODO</Link>
            </li>
            <li>
              <a target="_blank" rel="noreferrer" href="https://t.me/rabingym">
                Мой телеграм
              </a>
            </li>
          </div>
        </div>
      </div>
    </nav>
  );
};

AnotherNavBar.propTypes = {
  setChecked: PropTypes.any,
  checked: PropTypes.bool,
};

export default AnotherNavBar;
