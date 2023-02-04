import { useEffect, useState } from "react";
import { useCartContext } from "../context/CartContext"
import { useParams, Link } from "react-router-dom";

export default function Pizza() {
  const [pizza, setPizza] = useState();
  const [loading, setLoading] = useState(true);
  const {addItem} = useCartContext();

  const params = useParams();

  useEffect(() => {
    setLoading(true);
    fetch("/pizzas.json")
      .then((response) => response.json())
      .then((data) => {
        const pizza = data.find((item) => item.id === params.id);
        setPizza(pizza);
      })
      .finally(() => setLoading(false));
  }, [params]);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="card mb-3 mt-5">
      <div className="row g-0">
        <div className="col-md-4">
          <img
            src={pizza.img}
            className="img-fluid rounded-start h-100"
            alt="..."
          />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="fs-1">{pizza.name}</h5>
            <p className="card-text">{pizza.desc}</p>
            <p className="card-text">
              <small className="text-muted">
                {pizza.ingredients.map((ingredient, index) => (
                  <span key={ingredient}>
                    {ingredient}
                    {pizza.ingredients.length !== index + 1 && ", "}
                  </span>
                ))}
              </small>
            </p>
            <Link
              className="btn btn-outline-primary"
              onClick={() => addItem(pizza)}
              to="/cart"
            >
              Comprar
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
