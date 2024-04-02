import React from "react";
import "./style.css";

import Header from "./components/header/header";
import Main from "./components/main/main";
import Content from "./components/content/content";
import Footer from "./components/footer/footer";


export default function App() {
  return (
    <div className="App">
      <Header title="Header" />
      <Main message="Navigation Bar" />
      <Content view="Main Content" />
      <Footer note="Footer" />
    </div>
  );
}