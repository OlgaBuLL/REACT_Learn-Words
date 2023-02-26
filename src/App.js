import React from "react";

import "./App.scss";

import Header from "./components/Header.jsx";
import TableMap from "./components/table/TableMap.jsx";
// import CardMap from "./components/card/CardMap.jsx";
import Footer from "./components/Footer";
import ShowCard from "./components/card/ShowCard.jsx";

function App() {
  return (
    <div className="App">
      <Header />
      <TableMap />
      {/* <CardMap /> */}
      <ShowCard />
      <hr></hr>
      <Footer />
    </div>
  );
}

export default App;
