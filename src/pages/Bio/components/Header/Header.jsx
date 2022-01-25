import React from 'react';
import AnotherNavBar from '../../../NavBar/AnotherNavBar';

const Header = () => {
  return (
    <div className="bio__header">
      <div className="bio__header_photo">
        <img src="https://i.imgur.com/ektlwst.jpg" alt="myPhoto" />
      </div>
      <div className="bio__header_info">
        <h4>Будущий frontend разработчик</h4>
        <h1>Меркулов Александр</h1>
        <AnotherNavBar />
        <button
          id="toggleTheme"
          onClick={() => {
            const el = document.documentElement;
            if (el.hasAttribute('data-theme')) {
              el.removeAttribute('data-theme');
              localStorage.removeItem('theme');
            } else {
              el.setAttribute('data-theme', 'dark');
              localStorage.setItem('theme', 'dark');
            }
          }}
        >
          T
        </button>
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
