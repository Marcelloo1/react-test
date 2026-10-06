import animalsData from "./data/animal.json";
import type { Animal } from "./types/animal";
import "./App.css";

const animals: Animal[] = animalsData;

function App() {
  return (
    <main className="container">
      <h1>Zwierzęta</h1>
      <div className="cards">
        {animals.map((animal) => (
          <div className="card" key={animal.name}>
            <h2>{animal.name}</h2>
            <p>Kontynent: {animal.continent}</p>
            <p>Średnia prędkość: {animal.averageSpeed} km/h</p>
            <p>Średnia waga: {animal.weight} kg</p>
          </div>
        ))}
      </div>
    </main>
  );
}

export default App;