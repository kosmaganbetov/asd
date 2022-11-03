import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TourmateInfo from "./components/TourmateInfo/TourmateInfo";
import TravellaInfo from "./components/TravellaInfo/TravellaInfo";
import FooterMain from "./components/FooterMain/FooterMain";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TravellaInfo />} />
      </Routes>
      <TourmateInfo />
      <FooterMain />
    </BrowserRouter>
  );
}

export default App;
