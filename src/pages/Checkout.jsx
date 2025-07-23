import React from 'react';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';
import '../styles/Checkout.css'; 
import { useAuth } from '../context/AuthContext.jsx';

const Checkout = () => {
  const { cartItems, totalAmount, clearCart } = useCart();
  const navigate = useNavigate();
  const { user } = useAuth();

  const handlePayment = async () => {
  const options = {
    key: 'rzp_test_mcPgOenFRLxSRd', 
    amount: totalAmount * 100, 
    currency: 'INR',
    name: 'ShopEase',
    description: 'Test Transaction',
    image: '/logo.png',
    handler: function (response) {
      localStorage.setItem('receiptItems', JSON.stringify(cartItems));
      localStorage.setItem('receiptTotal', totalAmount);
      localStorage.setItem('receiptEmail', user?.email || 'guest@example.com'); 

      clearCart();
      navigate('/success');
    },
    prefill: {
      name: 'Test User',
      email: 'test@example.com',
      contact: '9999999999'
    },
    theme: {
      color: '#3182CE'
    }
  };

  const razor = new window.Razorpay(options);
  razor.open();
};


  return (
    <div className="checkout-container">
      <h2 className="checkout-title">Checkout</h2>
      <div>
        {cartItems.map((item) => (
          <div key={item.id} className="checkout-item">
            <p>{item.name} x {item.qty}</p>
            <p>₹{item.price * item.qty}</p>
          </div>
        ))}
        <div className="checkout-total">Total: ₹{totalAmount}</div>
        <button className="checkout-button" onClick={handlePayment}>
          Pay with Razorpay
        </button>
      </div>
    </div>
  );
};

export default Checkout;
