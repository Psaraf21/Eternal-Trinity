import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Checkout from './Checkout';
import Header from "./Header";
import '../css/Cart.css'
function Cart() {
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    // Fetch cart items from backend API
    axios.get('http://localhost:5001/api/cart')
      .then(response => {
        setCartItems(response.data.items || []); // Ensure items is an array
        calculateTotalPrice(response.data.items);
      })
      .catch(error => {
        console.error('Error fetching cart items:', error);
      });
  }, []); // Empty dependency array ensures the effect runs only once

  const removeFromCart = async (itemId) => {
    try {
      // Send a POST request to remove item from cart
      await axios.post('http://localhost:5001/api/cart/remove', { parshadId: itemId });
      
      // Update cart items after removal
      setCartItems(prevCartItems => {
        const updatedCartItems = [...prevCartItems];
        const index = updatedCartItems.findIndex(item => item.parshadId === itemId);
        if (index !== -1) {
          const updatedItem = { ...updatedCartItems[index] };
          updatedItem.quantity--; // Decrease quantity
          if (updatedItem.quantity === 0) {
            // Remove item if quantity becomes zero
            updatedCartItems.splice(index, 1);
          } else {
            updatedCartItems[index] = updatedItem;
          }
          calculateTotalPrice(updatedCartItems);
        }
        return updatedCartItems;
      });
      console.log('Item removed from cart successfully:', itemId);
    } catch (error) {
      console.error('Error removing item from cart:', error);
    }
  };

  const calculateTotalPrice = (items) => {
    let totalPrice = 0;
    items.forEach(item => {
      totalPrice += item.price * item.quantity;
    });
    setTotalPrice(totalPrice);
  };

  return (
    <div className='main_hero_container'>
      <Header/>
      <div className='Title_Cart_Name_container'> <h2 className='Title_Cart_Name'>Cart</h2></div>
     
      {cartItems.length === 0 ? (
        <p className='Cart_is_empty'>Your cart is empty.</p>
      ) : (
        <div className='Product_Cart_table'>
          <div className='Product_Cart_table22'> {cartItems.map(item => (
            <div key={item._id} className='Product_Cart_table2'>
              {/* Assuming the server sends image, name, and price */}
              <div className='Product_Cart_table2_image'><img src={item.image} alt={item.name} style={{ width: '100px', height: '100px' }} /></div>
              <div className='Product_Cart_table2_box'>  <div>{item.name}-${item.price}</div> <div></div>  <div>(Quantity: {item.quantity})</div>
              <button onClick={() => removeFromCart(item.parshadId)}>Remove</button></div>
            </div>
          ))}
            {/* <p>Total Price: ${totalPrice}</p> */}
          </div>
          <div className='Product_Cart_table2_box_left'><Checkout totalPrice={totalPrice} /></div>
        </div>
      )}
    </div>
  );
}

export default Cart;
