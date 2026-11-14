import "./App.css";
import { Counter } from "./components/Counter";
import { HabitCard } from "./components/HabitCard";
import { Header } from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <Counter />

      <HabitCard icon="🏃‍♂️" name="Correr" />
      <HabitCard icon="📚" name="Ler um livro" />
      <HabitCard icon="💧" name="Beber 2L de água" />
    </>
  );
}

export default App;
