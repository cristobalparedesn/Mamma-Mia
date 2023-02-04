export default function Navbar() {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <div className="container">
        <a
          className="navbar-brand"
          href="/"
        >
          MamaMía 😋
        </a>
        <div className="d-flex gap-2">
          <a
            className="btn btn-outline-light"
            href="/pizzas"
          >
            Pizzas
          </a>
          <a
            className="btn btn-outline-info me-2"
            href="/cart"
          >
            Cart: $3.99
          </a>
        </div>
      </div>
    </nav>
  );
}
