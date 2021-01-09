import React from "react";

import { ContextProvider } from "./context/Context";

import Search from "./components/Search/Search";
import Timeline from "./components/Timeline/Timeline";
import Header from "./components/Header/Header";

import "./stylesheets/main.scss";

const App = () => {
  return (
    <>
      <ContextProvider>
        <Search />
        <Header />
        <Timeline />
      </ContextProvider>
    </>
  );
};

export default App;
