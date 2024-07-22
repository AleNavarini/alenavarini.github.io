import React, { useEffect, useState } from 'react';

const ThemeToggle = () => {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
    document.querySelector('html')?.setAttribute('data-theme', savedTheme);
  }, []);

  const themeToggleHandler = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.querySelector('html')?.setAttribute('data-theme', newTheme);
  };

  return (
    <div className="flex justify-end">
      <input
        type="checkbox"
        onChange={themeToggleHandler}
        checked={theme === 'light'}
        className="theme-checkbox"
      />
    </div>
  );
};

export default ThemeToggle;
