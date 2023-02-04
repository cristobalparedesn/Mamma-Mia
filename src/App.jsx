import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Pizzas from "./pages/Pizzas";
import Pizza from "./pages/Pizza";
import Cart from "./pages/Cart";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <div>
      <Navbar />

      <main className="container">
        <Routes>
          <Route
            path="/"
            element={<Home />}
          />
          <Route
            path="/pizzas"
            element={<Pizzas />}
          />
          <Route
            path="/pizzas/:id"
            element={<Pizza />}
          />
          <Route
            path="/cart"
            element={<Cart />}
          />
          {/* Agregar ruta 404 */}
        </Routes>
      </main>
    </div>
  );
}
