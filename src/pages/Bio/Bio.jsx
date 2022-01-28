import React from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Information from './components/Information/Information';
import NavBar from '../../components/NavBar/NavBar';
import '../../App.css';

const Bio = ({ theme, themeToggler, mountedComponent }) => {
  if (!mountedComponent) return <div />;
  return (
    <div className="bio">
      <NavBar />
      <Header
        theme={theme}
        themeToggler={themeToggler}
        mountedComponent={mountedComponent}
      />
      <Information />
      <Footer />
    </div>
  );
};

export default Bio;
