import React from "react";
import Footer from "./components/footer/footer";
import Navbar from "./components/navbar/navbar";
import Middle from "./components/middle/middle";
import Slidepic from "./components/slidepic/slidepic";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div class="slidePic">
        <Slidepic />
      </div>
      <Middle />
      <Footer />
    </div>
  );
}

export default App;
