import { useCartContext } from "../context/CartContext";
import { formatPrice } from "../utils/formatPrice";

export default function CartItem({ item }) {
  const { addItem, removeItem, findItemCount } = useCartContext();

  return (
    <li className="list-group-item">
      <div className="d-flex justify-content-between align-items-center">
        <div className="d-flex align-items-center">
          <img
            className="me-3"
            src={item.img}
            alt="Pizza"
            width="100"
          />
          <div>
            <h5 className="mb-0">{item.name}</h5>
            <small className="text-muted">{formatPrice(item.price)}</small>
          </div>
        </div>
        <div className="d-flex gap-1">
          <button
            className="btn btn-outline-danger btn-sm"
            onClick={() => removeItem(item)}
          >
            -
          </button>
          <button className="btn btn-outline-dark btn-sm disabled">
            {findItemCount(item.id)}
          </button>
          <button
            className="btn btn-outline-primary btn-sm"
            onClick={() => addItem(item)}
          >
            +
          </button>
        </div>
      </div>
    </li>
  );
}
