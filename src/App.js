import logo from "./logo.svg";
import "./App.css";
import Saludar from "./components/Saludar";

function App() {
  const user = {
    nombre: "Madeley Ibarra",
    edad: 24,
    colorFavorito: "Azul",
  };

  const saludarFn = (name) => {
    console.log("Hola que tal chaval " + name);
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <Saludar userInfo={user} saludarFn={saludarFn} />
      </header>
    </div>
  );
}

export default App;
