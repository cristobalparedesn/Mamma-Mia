import { Link, NavLink } from "react-router-dom";
import { useCartContext } from "../context/CartContext";
import { formatPrice } from "../utils/formatPrice";

export default function Navbar() {
  const { totalCart } = useCartContext();
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
          <NavLink
            className="btn btn-outline-light"
            to="/pizzas"
          >
            Pizzas
          </NavLink>
          <NavLink
            className="btn btn-outline-info me-2"
            to="/cart"
          >
            Cart: ${formatPrice(totalCart())}
          </NavLink>
        </div>
      </div>
    </nav>
  );
}
