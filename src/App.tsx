import React, { useState } from "react";
import "./App.css";
import './Colors.scss'
import { MainColumn } from "./Components/Common/MainColumn/MainColumn";
import { SideBar } from "./Components/Common/SideBar/SideBar";
import Container from "./Components/Common/Container/Container";
import { NavBar } from "./Components/Common/Nav/NavBar/NavBar";

function App() {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light')

  const themeToggleHandler = () => {
    if (theme === 'light') {
      setTheme('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      setTheme('light')
      localStorage.setItem('theme', 'light')
    }
  }
  return (
    <div className={theme}>
      <NavBar onThemeToggle={themeToggleHandler} />
      <Container>
        <MainColumn />
        <SideBar />
      </Container>
    </div>
  );
}

export default App;
