import React from "react";

import { ContextProvider } from "./context/Context";

import Search from "./components/Search/Search";
import Timeline from "./components/Timeline/Timeline";
import Header from "./components/Header/Header";
import Pagination from "./components/Pagination/Pagination";

const App = () => {
  return (
    <>
      <ContextProvider>
        <Search />
        <Header />
        <Timeline />
        <Pagination />
      </ContextProvider>
    </>
  );
};

export default App;
