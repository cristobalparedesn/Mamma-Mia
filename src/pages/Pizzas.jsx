import Card from "../components/Card";

export default function Pizzas() {
  return (
    <div>
      <h1>Pizzas</h1>
      <div className="row">
        {[1, 2, 3, 4].map((item) => (
          <Card key={item} />
        ))}
      </div>
    </div>
  );
}
