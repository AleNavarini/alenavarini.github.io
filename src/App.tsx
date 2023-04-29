import React from "react";
import "./App.css";
import { MainColumn } from "./Components/Common/MainColumn/MainColumn";
import { SideBar } from "./Components/Common/SideBar/SideBar";
import Container from "./Components/Common/Container/Container";

function App() {
  return (
    <Container>
      <MainColumn />
      <SideBar />
    </Container>
  );
}

export default App;
