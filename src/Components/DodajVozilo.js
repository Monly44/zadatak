import React, { useState } from "react";

const DodajVozilo = ({ onDodajVozilo }) => {
  const [novaVozila, setNovaVozila] = useState({
    marka: "",
    tip: "",
    godiste: "",
  });
  const [isEmptyForm, setIsEmptyForm] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNovaVozila((prevVozilo) => ({
      ...prevVozilo,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      novaVozila.marka.trim() === "" &&
      novaVozila.tip.trim() === "" &&
      novaVozila.godiste.trim() === ""
    ) {
      setIsEmptyForm(true);
    } else {
      setIsEmptyForm(false);
      onDodajVozilo(novaVozila);
      setNovaVozila({ marka: "", tip: "", godiste: "" });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        <input
          placeholder="Marka"
          type="text"
          name="marka"
          value={novaVozila.marka}
          onChange={handleChange}
        />
      </label>
      <label>
        <input
          placeholder="Tip"
          type="text"
          name="tip"
          value={novaVozila.tip}
          onChange={handleChange}
        />
      </label>
      <label>
        <input
          placeholder="Godište"
          type="text"
          name="godiste"
          value={novaVozila.godiste}
          onChange={handleChange}
        />
      </label>
      {isEmptyForm && (
        <p style={{ color: "blue" }}>Molimo unesite podatke za vozilo.</p>
      )}
      <button type="submit">Dodaj vozilo</button>
    </form>
  );
};

export default DodajVozilo;
