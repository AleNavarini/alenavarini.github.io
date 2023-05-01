import React from "react";
import "./App.css";
import { MainColumn } from "./Components/Common/MainColumn/MainColumn";
import { SideBar } from "./Components/Common/SideBar/SideBar";
import Container from "./Components/Common/Container/Container";
import { NavBar } from "./Components/Common/Nav/NavBar/NavBar";

function App() {
  return (
    <>
      <NavBar />

      <Container>
        <MainColumn />
        <SideBar />
      </Container>
    </>
  );
}

export default App;
