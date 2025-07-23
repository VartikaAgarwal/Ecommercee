import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css';

const Home = () => {
  return (
    <div className="home-banner">
      <div className="home-box">
        <h1 className="head text-9xl font-bold text-blue-600 mb-4">Welcome to ShopEase</h1>
        <p className="desc text-lg text-gray-700 mb-6">
          Discover top-quality products, smooth checkout, and instant receipts. Start shopping now!
        </p>
        <Link to="/products">
          <button className="browse-btn">
            Browse Products
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
