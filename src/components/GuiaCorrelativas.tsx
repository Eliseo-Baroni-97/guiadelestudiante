

import React, { useState } from "react";
import { careers } from "../data/careers";
import { CareerMapView } from "./CareerMapView";

const GuiaCorrelativas: React.FC = () => {
  const [selectedCareerId, setSelectedCareerId] = useState<string>(careers[0]?.id || "");
  const selectedCareer = careers.find((c) => c.id === selectedCareerId);

  return (
    <section style={{ padding: "2rem" }}>
      <h2>Guía de Correlativas</h2>
      <p>Seleccioná una carrera para ver el grafo de correlatividades entre materias.</p>
      <div style={{ marginBottom: "1.5rem" }}>
        <label htmlFor="career-select" style={{ marginRight: 8, fontWeight: 500 }}>Carrera:</label>
        <select
          id="career-select"
          value={selectedCareerId}
          onChange={e => setSelectedCareerId(e.target.value)}
          style={{ padding: "0.4rem 1rem", borderRadius: 6, border: "1px solid #ccc", fontSize: 16 }}
        >
          {careers.map((career) => (
            <option key={career.id} value={career.id}>{career.name}</option>
          ))}
        </select>
      </div>
      {selectedCareer && (
        <div style={{ marginTop: 24 }}>
          <CareerMapView map={selectedCareer} />
        </div>
      )}
    </section>
  );
};

export default GuiaCorrelativas;
