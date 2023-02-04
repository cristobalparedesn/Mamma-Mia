import CartItem from "../components/CartItem";
import { useCartContext } from "../context/CartContext";

export default function Cart() {
  const { cart, totalCart } = useCartContext();

  return (
    <div>
      <h1 className="text-center my-5">Cart</h1>
      <ul className="list-group">
        {cart.map((item) => (
          <CartItem
            key={item.id}
            item={item}
          />
        ))}

        {cart.length === 0 && (
          <li className="list-group-item text-center">
            <b>El carrito está vacío</b>
          </li>
        )}
        <li className="list-group-item list-group-item-action active text-end">
          <b>Total: ${totalCart().toLocaleString("de-DE")}</b>
        </li>
      </ul>
    </div>
  );
}
