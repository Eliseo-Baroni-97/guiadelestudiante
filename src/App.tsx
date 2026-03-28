import "./App.css";
import { useMemo, useState } from "react";
import { careers } from "./data/careers";
import { CareerMapView } from "./components/CareerMapView";

export default function App() {
  const [selectedCareerId, setSelectedCareerId] = useState<string | null>(null);
  const selectedCareer = useMemo(
    () => careers.find((career) => career.id === selectedCareerId) ?? null,
    [selectedCareerId]
  );

  return (
    <div className="app">
      <header className="header">
        <h1>Guía del Estudiante</h1>
        <p>Guía para no perderte con correlativas.</p>
      </header>

      <main className="main">
        {selectedCareer ? (
          <section className="card">
            <div className="d-flex justify-content-end mb-3">
              <button
                type="button"
                className="btn btn-outline-secondary btn-sm"
                onClick={() => setSelectedCareerId(null)}
              >
                Volver a carreras
              </button>
            </div>
            <CareerMapView map={selectedCareer} />
          </section>
        ) : (
          <section className="card">
            <h2 className="h4 mb-3">Elegí tu carrera</h2>
            <div className="row g-3">
              {careers.map((career) => (
                <div className="col-12 col-md-6 col-xl-4" key={career.id}>
                  <div className="card h-100 shadow-sm border-0">
                    <div className="card-body d-flex flex-column">
                      <h3 className="h6 mb-2">{career.name}</h3>
                      <p className="text-muted mb-3">Plan v{career.version}</p>
                      <button
                        type="button"
                        className="btn btn-primary mt-auto"
                        onClick={() => setSelectedCareerId(career.id)}
                      >
                        Ver mapa
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}
      </main>
    </div>
  );
}