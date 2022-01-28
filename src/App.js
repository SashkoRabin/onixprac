import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import APIFetching from './pages/APIFetching/APIFetching';
import Bio from './pages/Bio/Bio';
import './App.css';
import { GlobalStyles } from './components/utils/Theme/GlobalStyles';
import { lightTheme, darkTheme } from './components/utils/Theme/Themes';
import { ThemeProvider } from 'styled-components';
import { useDarkMode } from './components/utils/myHooks/useDarkMode';

function App() {
  const [theme, themeToggler, mountedComponent] = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;
  return (
    <ThemeProvider theme={themeMode}>
      <>
        <GlobalStyles />
        <BrowserRouter>
          <Routes>
            <Route
              path="/bio"
              element={
                <Bio
                  theme={theme}
                  themeToggler={themeToggler}
                  mountedComponent={mountedComponent}
                />
              }
            />
            <Route path="/api" element={<APIFetching />} />
            <Route
              path="*"
              element={
                <Bio
                  theme={theme}
                  themeToggler={themeToggler}
                  mountedComponent={mountedComponent}
                />
              }
            />
          </Routes>
        </BrowserRouter>
      </>
    </ThemeProvider>
  );
}

export default App;
