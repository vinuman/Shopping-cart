import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart, checkout } from "../redux/actions/cartActions";

const CartPage = () => {
  const { cart } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const total = cart.reduce((total, product) => total + product.price, 0);

  return (
    <>
      {cart.map((items) => (
        <div key={items.id}>
          <h3>{items.title}</h3>
          <p>{items.description}</p>
          <p>{items.price}</p>
          <button onClick={() => dispatch(removeFromCart(items.id))}>
            Remove from cart
          </button>
        </div>
      ))}
      <h1>Total Price: {total}</h1>
      <button onClick={() => dispatch(checkout())}>Checkout</button>
    </>
  );
};

export default CartPage;
