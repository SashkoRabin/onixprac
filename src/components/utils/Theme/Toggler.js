import React from 'react';
import PropTypes from 'prop-types';

const Toggle = ({ theme, toggleTheme }) => {
  return (
    <button id="toggleTheme" onClick={toggleTheme}>
      T
    </button>
  );
};

Toggle.propTypes = {
  theme: PropTypes.string.isRequired,
  toggleTheme: PropTypes.func.isRequired,
};

export default Toggle;
