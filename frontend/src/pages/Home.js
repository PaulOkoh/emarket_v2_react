import data from "../data";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div>
      <h1>Featured</h1>
      <div className="products">
        {data.products.map((product) => (
          <div className="product" key={product.id}>
            <Link to={`/product/${product.id}`}>
              <img src={product.image} alt={product.name} />
            </Link>
            <div className="product-info">
              <Link to={`/product/${product.id}`}>
                <p>{product.name}</p>
              </Link>
              <p>{product.description}</p>
              <p>${product.price}</p>
              <button>Add to cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Home;
