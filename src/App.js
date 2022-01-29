import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import SiteRouter from './components/SiteRouter/SiteRouter';
import './App.css';
import { GlobalStyles } from './components/utils/Theme/GlobalStyles';
import { lightTheme, darkTheme } from './components/utils/Theme/Themes';
import { ThemeProvider } from 'styled-components';
import { useDarkMode } from './components/utils/myHooks/useDarkMode';
import { MyThemeContext } from './components/utils/context/contextIndex';

function App() {
  const [theme, themeToggler, mountedComponent] = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;
  return (
    <ThemeProvider theme={themeMode}>
      <>
        <GlobalStyles />
        <MyThemeContext.Provider
          value={{
            theme,
            themeToggler,
            mountedComponent,
          }}
        >
          <BrowserRouter>
            <SiteRouter />
          </BrowserRouter>
        </MyThemeContext.Provider>
      </>
    </ThemeProvider>
  );
}

export default App;
