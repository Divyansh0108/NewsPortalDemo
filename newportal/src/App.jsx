import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./assets/components/nav";
import SortButton from "./assets/components/sorting";
import "./assets/css/sorting.css";

function App() {
  return (
    <>
      <NavBar />
      <div className="sorting-button">
        <SortButton />
      </div>
    </>
  );
}

export default App;
