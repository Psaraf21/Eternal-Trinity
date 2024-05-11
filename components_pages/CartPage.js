import React from 'react';

const CartPage = ({ cart, removeFromCart, handleCheckout }) => {
  return (
    <div className="cart-page">
      <h2>Cart</h2>
      {cart.length > 0 ? (
        <div>
          {cart.map((item, index) => (
            <div key={index} className="cart-item">
              <img src={item.image} alt={item.title} />
              <div className="cart-item-info">
                <h3>{item.title}</h3>
                <p>{item.price}</p>
                <button onClick={() => removeFromCart(index)}>Remove</button>
              </div>
            </div>
          ))}
          <button onClick={handleCheckout}>Checkout</button>
        </div>
      ) : (
        <p>Your cart is empty.</p>
      )}
    </div>
  );
};

export default CartPage;
