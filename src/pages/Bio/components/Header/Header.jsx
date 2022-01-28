import React from 'react';
import AnotherNavBar from '../../../../components/AnotherNavBar/AnotherNavBar';
import Toggle from '../../../../components/utils/Theme/Toggler';

const Header = ({ theme, themeToggler }) => {
  return (
    <div className="bio__header">
      <Toggle theme={theme} toggleTheme={themeToggler} />
      <div className="bio__header_photo">
        <img src="https://i.imgur.com/ektlwst.jpg" alt="myPhoto" />
      </div>
      <div className="bio__header_info">
        <h4>Будущий frontend разработчик</h4>
        <h1>Меркулов Александр</h1>
        <AnotherNavBar />

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

export default Header;
