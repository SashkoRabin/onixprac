import React from 'react';
import PropTypes from 'prop-types';

const Toggle = ({ toggleTheme }) => {
  return (
    <button className="button-toggle" id="toggleTheme" onClick={toggleTheme}>
      T
    </button>
  );
};

Toggle.propTypes = {
  toggleTheme: PropTypes.func.isRequired,
};

export default Toggle;
