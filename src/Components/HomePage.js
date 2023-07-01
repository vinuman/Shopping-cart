import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchProducts } from "../redux/actions/apiActions";
import { addToCart } from "../redux/actions/cartActions";

const HomePage = () => {
  const { loading, products, error } = useSelector((state) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1>{error}</h1>;

  return (
    <>
      <div>
        {products.map((product) => (
          <div key={product.id}>
            <h3>{product.title}</h3>
            <p>{product.description}</p>
            <p>{product.price}</p>
            <p>{product.discountPercentage}</p>
            <p>{product.rating}</p>
            <p>{product.stock}</p>
            <p>{product.brand}</p>
            <p>{product.category}</p>
            <img alt={product.title} src={product.thumbnail}></img>
            <button onClick={() => dispatch(addToCart(product))}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default HomePage;
