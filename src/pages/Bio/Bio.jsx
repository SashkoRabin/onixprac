import React, { useContext } from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Information from './components/Information/Information';
import NavBar from '../../components/NavBar/NavBar';
import '../../App.css';
import { MyThemeContext } from '../../components/utils/context/contextIndex';

const Bio = () => {
  const { theme, themeToggler, mountedComponent } = useContext(MyThemeContext);
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
