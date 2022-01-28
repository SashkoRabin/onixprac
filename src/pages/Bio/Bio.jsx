import React from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Information from './components/Information/Information';
import NavBar from '../../components/NavBar/NavBar';
import '../../App.css';
import './Bio.styles.css';

const Bio = () => {
  if (localStorage.getItem('theme') !== null) {
    document.documentElement.setAttribute('data-theme', 'dark');
  }
  return (
    <div className="bio">
      <NavBar />
      <Header />
      <Information />
      <Footer />
    </div>
  );
};

export default Bio;
