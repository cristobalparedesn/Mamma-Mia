import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <div className="container">
        <Link
          className="navbar-brand"
          to="/"
        >
          MamaMía 😋
        </Link>
        <div className="d-flex gap-2">
          <Link
            className="btn btn-outline-light"
            to="/pizzas"
          >
            Pizzas
          </Link>
          <Link
            className="btn btn-outline-info me-2"
            to="/cart"
          >
            Cart: $3.99
          </Link>
        </div>
      </div>
    </nav>
  );
}
