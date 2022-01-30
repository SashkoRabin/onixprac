import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
.bio {
    background: ${(props) => props.theme.mainbg};
    transition: 0.2s;
}
.bio__footer {
    height: 100px;
    width: 95%;
    background: ${(props) => props.theme.headerfooterbg};
    margin: 30px auto 0 auto;
}
.bio__header {
    position: relative;
    margin: 0 auto;
    width: 95%;
    height: 350px;
    background: linear-gradient(
      to bottom,
      ${(props) => props.theme.headerfooterbg} 50%,
      ${(props) => props.theme.mainbg} 50%
    );
    display: flex;
    border-radius: 10px;
}
.bio__header_photo {
    width: 40%;
  }
  
  .bio__header_photo > img {
    margin: 40px;
    width: 200px;
    height: 250px;
    border-radius: 10px;
    box-shadow: ${(props) => props.theme.photoshadow};
  }
  
  .bio__header_info {
    margin-left: 15px;
    width: 50%;
    text-transform: uppercase;
    text-align: center;
    padding-right: 40px;
  }
  
  .bio__header_info > h4 {
    margin-top: 40px;
    color: ${(props) => props.theme.headerinfoh4};
    font-weight: 700;
    font-size: 18px;
  }
  
  .bio__header_info > h1 {
    color: ${(props) => props.theme.mainbg};
    font-weight: 900;
    font-size: 24px;
  }
  
  .bio__header_info > p {
    margin-top: 75px;
    margin-bottom: 10px;
    color: ${(props) => props.theme.textblack};
  }
  
  .bio__header_info > h5 {
    font-weight: 500;
    color: ${(props) => props.theme.textblack};
  }
  .bio__info {
    width: 350px;
    margin: 20px;
  }
  
  .bio__info > h2 {
    border-top: ${(props) => props.theme.bioinfoborder};
    text-transform: uppercase;
    padding-top: 5px;
    color: ${(props) => props.theme.textblack};
  }
  
  .bio__info > p {
    padding-top: 10px;
    text-align: justify;
    color: ${(props) => props.theme.textblack};
  }
  
  .bio__wrapper {
    margin: 0 auto;
    width: 95%;
    height: auto;
    display: flex;
    flex-wrap: wrap;
    background: ${(props) => props.theme.mainbg};
  }
  
  #toggleTheme {
    border-radius: 5px;
    background: #fafafa;
    box-shadow: none;
    border: none;
    width: 50px;
    height: 25px;
    color: #000;
    position: absolute;
    right: 0;
    top: 0;
    margin: 11px;
    cursor: pointer;
    font-weight: 700;
    z-index: 50;
  }
  
  .navbar {
    margin: 0 auto;
    padding: 15px 0;
    width: 95%;
  }
  
  .navbar__linkItem {
    text-decoration: none;
    margin: 0 20px;
    color: ${(props) => props.theme.textblack};
    font-weight: 700;
    font-size: 18px;
    border: none;
    outline: none;
    background: transparent;
    transition: all 0.5s;
    z-index: 1;
    position: relative;
    padding: 0 10px;
  }
  
  .linkItem:hover {
    color: #c4c3c3;
    transition: 0.2s;
    text-shadow: #000;
  }
  
  .navbar__linkItem::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 3px;
    height: 100%;
    background-color: ${(props) => props.theme.bghover};
    color: ${(props) => props.theme.linkitemcolor};
    z-index: -1;
    transition: all 0.5s;
  }
  
  .navbar__linkItem:hover::before {
    width: 100%;
  }
  
  .navbar__linkItem:hover {
    color: ${(props) => props.theme.linkitemcolor};
  }
  
  .navbar__linkItem:active:before {
    background: ${(props) => props.theme.linkitemcolor};
  }
  
  .anav__container {
    width: 107%;
    margin: 0 auto;
    display:block;
    position: relative;
    height: 60px;
  }
  .anav {
    display: none;
    position: absolute;
    width: 107%;
    left: 0;
    top: 0;
  }
  .anav .anav__menu-items {
    display:flex;
    text-align: center;
    text-transform: uppercase;
  }
  .anav__container li {
    list-style: none;
  }
  .anav__container a {
     text-decoration: none;  
     color: rgb(90, 90, 90);
     font-weight: 700;
     font-size: 1.3rem;
     padding: 0.7rem;
  }
  .anav__container .anav__checkbox {
    position: absolute;
    display: block;
    height: 32px;
    width: 32px;
    top: 20px;
    left: 20px;
    z-index: 5;
    opacity: 0;
    cursor: pointer;
  }
  .anav__container .anav__hamburger_lines {
    height: 26px;
    width: 32px;
    position: absolute;
    top: 17px;
    left: 20px;
    z-index: 2;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .anav__container .anav__hamburger_lines .line {
    display: block;
    height: 4px;
    width: 100%;
    border-radius: 10px;
    background: #c4c3c3;
  }
  .anav__container .anav__hamburger_lines .line1 {
    transform-origin: 0% 0%;
    transition: transform 0.4s ease-in-out;
  }
  .anav__container .anav__hamburger_lines .line2 {
    transition: transform 0.2s ease-in-out;
  }
  .anav__container .anav__hamburger_lines .line3 {
    transform-origin: 0% 100%;
    transition: transform 0.4s ease-in-out;
  }
  .anav__container .anav__menu-items {
    padding-top: 120px;
    box-shadow: inset 0 0 2000px rgba(255, 255, 255, 1);
    background: rgba(255, 255, 255, 0.9);
    height: 100vh;
    width: 100%;
    transform: translate(-150%);
    display: flex;
    flex-direction: column;
    margin-left: -40px;
    padding-left: 50px;
    transition: transform 0.5s ease-in-out;
  }
  .anav .anav__menu-items li {
    margin-bottom: 1.2rem;
    font-size: 1.5rem;
    font-weight: 500;
    margin-right: 50px;
  }
  .anav__menu-items a:hover {
    color: #0e2431;
    transition: 0.2s;
    text-shadow: #000;
  }
  .anav__container input[type="checkbox"]:checked ~ .anav__menu-items {
    transform: translateX(0);
  }
  .anav__container input[type="checkbox"]:checked ~ .anav__hamburger_lines .line1 {
    transform: rotate(45deg);
  }
  .anav__container input[type="checkbox"]:checked ~ .anav__hamburger_lines .line2 {
    transform: scaleY(0);
  }
  .anav__container input[type="checkbox"]:checked ~ .anav__hamburger_lines .line3 {
    transform: rotate(-45deg);
  }
  

  @media (max-width: 600px) {
    .bio__header_info > h4 {
      display: none;
    }
    .bio__header_info > h1 {
      margin-top: 45px;
    }
    .bio__header_info > p {
      margin-top: 40px;
    }
    .bio__header_info {
      display: block;
      margin: 0 auto;
    }
    .bio__header_photo {
      display: none;
    }
    .navbar {
      display: none;
    }
    .anav {
      display: block;
    }
  }
  
`;
