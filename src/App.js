import React, { useState } from "react";
import Vozilo from "./Components/Vozilo";
import DodajVozilo from "./Components/DodajVozilo";
import "./App.css";

const App = () => {
  const [vozila, setVozila] = useState([
    { id: 1, marka: "Mazda", tip: "MX-5", godiste: "1995" },
    { id: 2, marka: "Toyota", tip: "MR2", godiste: "1998" },
  ]);

  const dodajVozilo = (novaVozila) => {
    setVozila((prevVozila) => [
      ...prevVozila,
      { id: prevVozila.length + 1, ...novaVozila },
    ]);
  };

  return (
    <div className="container">
      <div className="left-section">
        <h2>Dodaj vozilo</h2>
        <DodajVozilo onDodajVozilo={dodajVozilo} />
      </div>

      <div className="right-section">
        <h2>Lista vozila</h2>
        <div className="grid-container">
          {vozila.map((vozilo) => (
            <Vozilo
              key={vozilo.id}
              marka={vozilo.marka}
              tip={vozilo.tip}
              godiste={vozilo.godiste}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
