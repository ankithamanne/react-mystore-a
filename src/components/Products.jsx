import "./Products.css";
import { appContext } from "../App";
import { useContext } from "react";
export default function Products() {
  const { user, products, cart, setCart } = useContext(appContext);
  const addToCart = (id) => {
    setCart({ ...cart, [id]: 1 });
  };
  
  return (
    <div>
      <h3>{user.name}</h3>
      <div className="App-Products-Row">
        {products.map((value, index) => (
          <div className="App-Products-Box" key={index}>
            <h3>{value.name}</h3>
            <h5>{value.desc}</h5>
            <h4>{value.price}</h4>
            <button onClick={() => addToCart(value.id)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}