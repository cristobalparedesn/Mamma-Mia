import { useState, useEffect } from "react";
import Card from "../components/Card";

export default function Pizzas() {
  const [pizzas, setPizzas] = useState([])
  const getPizzas = async () => {
    const res = await fetch("pizzas.json");
    const data = await res.json();
    setPizzas(data);
  };
  useEffect(() => {
    getPizzas();
  }, [])

  return (
    <div>
      <h1>Pizzas</h1>
      <div className="row">
        {pizzas.map((item) =>{
          return(
            <Card key={item.id} item={item}/>
          )
        })}
      </div>
    </div>
  );
}
