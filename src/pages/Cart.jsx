import CartItem from "../components/CartItem";

export default function Cart() {
  return (
    <div>
      <h1 className="text-center my-5">Cart</h1>
      <ul className="list-group">
        {[1, 2, 3, 4].map((item) => (
          <CartItem key={item} />
        ))}
        <li className="list-group-item list-group-item-action active text-end">
          <b>Total: $95.000</b>
        </li>
      </ul>
    </div>
  );
}
