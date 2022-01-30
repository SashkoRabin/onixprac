import React, { useState } from 'react';
import AnotherNavBar from '../../../../components/AnotherNavBar/AnotherNavBar';
import Toggle from '../../../../components/utils/Theme/Toggler';
import PropTypes from 'prop-types';

const Header = ({ theme, themeToggler }) => {
  const [checked, setChecked] = useState(false);

  return (
    <div className="bio__header">
      {!checked && <Toggle theme={theme} toggleTheme={themeToggler} />}
      <div className="bio__header_photo">
        <img src="https://i.imgur.com/ektlwst.jpg" alt="myPhoto" />
      </div>
      <div className="bio__header_info">
        <h4>Будущий frontend разработчик</h4>
        <h1>Меркулов Александр</h1>
        <AnotherNavBar checked={checked} setChecked={setChecked} />
        <br />
        <p>
          <strong>Контактная информация</strong>
        </p>
        <h5>Telephone: +380951632772</h5>
        <h5>Email: sashrabin@gmail.com</h5>
      </div>
    </div>
  );
};

Header.propTypes = {
  theme: PropTypes.string.isRequired,
  themeToggler: PropTypes.func.isRequired,
};

export default Header;
