import React, { useContext } from 'react';
import { HiSun, HiMoon } from 'react-icons/hi';
import { ThemeContext } from './ThemeContext';

const ThemeToggle = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === 'dark' ? 'light' : 'dark'));
  };

  return (
    <div>
      {theme === 'dark' ? (
        <div
          className="flex items-center cursor-pointer"
          onClick={toggleTheme}
        >
          <HiSun />
        </div>
      ) : (
        <div
          className="flex items-center cursor-pointer"
          onClick={toggleTheme}
        >
          <HiMoon />
        </div>
      )}
    </div>
  );
};

export default ThemeToggle;
