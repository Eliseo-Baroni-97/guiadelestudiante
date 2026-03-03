import "./App.css";
import { materiasCarrera } from "./data/materiasCarrera";
import { CareerMapView } from "./components/CareerMapView";

export default function App() {
  return (
    <div className="app">
      <header className="header">
        <h1>Brújula U</h1>
        <p>Guía para no perderte con correlativas.</p>
      </header>

      <main className="main">
        <section className="card">
          <CareerMapView map={materiasCarrera} />
        </section>
      </main>
    </div>
  );
}