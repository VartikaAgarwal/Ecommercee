import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { generateReceiptPDF } from '../utils/pdfGenerator';
import '../styles/OrderSuccess.css';

const OrderSuccess = () => {
  const [receiptItems, setReceiptItems] = useState([]);
  const [total, setTotal] = useState(0);
  const [email, setEmail] = useState('');

  useEffect(() => {
  const items = JSON.parse(localStorage.getItem('receiptItems') || '[]');
  const totalAmount = localStorage.getItem('receiptTotal') || 0;
  const storedEmail = localStorage.getItem('receiptEmail') || 'guest@example.com';

  setReceiptItems(items);
  setTotal(totalAmount);
  setEmail(storedEmail);
}, []);


  const handleDownload = () => {
    if (receiptItems.length === 0) {
      alert('No items to generate receipt.');
      return;
    }
    generateReceiptPDF(receiptItems, total, email);
  };

  return (
    <div className="order-success-container">
      <h2 className="order-success-heading">🎉 Order Successful!</h2>
      <p className="order-success-text">Thank you for shopping with us. A confirmation email has been sent.</p>

      <button className="receipt-button" onClick={handleDownload}>
        Download Receipt PDF
      </button>

      <Link to="/">
        <button className="home-button">Go to Home</button>
      </Link>
    </div>
  );
};

export default OrderSuccess;
