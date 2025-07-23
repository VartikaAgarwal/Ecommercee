import React, { useEffect, useState } from 'react';
import ProductCard from '../components/Products/ProductCard';
import Filters from '../components/Products/Filters';
import tshirtImg from '../images/tshirt.jpg';
import jeansImg from '../images/jeans.jpeg';
import hoodieImg from '../images/hoodie.jpg';
import jacketImg from '../images/jacket.jpeg';
import dressImg from '../images/dress.jpeg';
import gamingImg from '../images/gamingMouse.jpg';
import headphoneImg from '../images/headphone.jpeg';
import laptopImg from '../images/laptop.jpg';
import monitorImg from '../images/monitor.jpg';
import phoneImg from '../images/phone.jpg';
import powerbnakImg from '../images/powerbank.jpg';
import smartwatchImg from '../images/smartwatch.jpg';
import tabletImg from '../images/tablet.jpeg';
import bagImg from '../images/bag.jpg';
import capImg from '../images/cap.jpg';
import formalImg from '../images/formal.jpg';
import sandalImg from '../images/sandal.jpg';
import shoesImg from '../images/shoes.jpg';
import slipperImg from '../images/slipper.jpg';
import sneakerImg from '../images/sneakers.jpg'
import '../styles/ProductList.css'; 


const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [search, setSearch] = useState('');

  useEffect(() => {
    const fetchedProducts = [
      { id: 1, name: 'T-shirt', category: 'Clothing', price: 499, imageURL: tshirtImg },
      { id: 2, name: 'Laptop', category: 'Electronics', price: 44999, imageURL: laptopImg },
      { id: 3, name: 'Sneakers', category: 'Footwear', price: 1999, imageURL: sneakerImg},
      { id: 4, name: 'Smartphone', category: 'Electronics', price: 29999, imageURL: phoneImg},
      { id: 5, name: 'Jeans', category: 'Clothing', price: 1499, imageURL: jeansImg },
      { id: 6, name: 'Headphones', category: 'Electronics', price: 2299, imageURL: headphoneImg },
      { id: 7, name: 'Sandals', category: 'Footwear', price: 899, imageURL: sandalImg },
      { id: 8, name: 'Jacket', category: 'Clothing', price: 2599, imageURL: jacketImg },
      { id: 9, name: 'Tablet', category: 'Electronics', price: 18999, imageURL: tabletImg },
      { id: 10, name: 'Formal Shoes', category: 'Footwear', price: 2999, imageURL: formalImg },
      { id: 11, name: 'Smartwatch', category: 'Electronics', price: 4999, imageURL: smartwatchImg },
      { id: 12, name: 'Dress', category: 'Clothing', price: 1999, imageURL: dressImg },
      { id: 13, name: 'Gaming Mouse', category: 'Electronics', price: 1299, imageURL: gamingImg },
      { id: 14, name: 'Backpack', category: 'Accessories', price: 899, imageURL: bagImg },
      { id: 15, name: 'Slippers', category: 'Footwear', price: 499, imageURL: slipperImg },
      { id: 16, name: 'Hoodie', category: 'Clothing', price: 999, imageURL: hoodieImg },
      { id: 17, name: 'Power Bank', category: 'Electronics', price: 1499, imageURL: powerbnakImg },
      { id: 18, name: 'Cap', category: 'Accessories', price: 299, imageURL: capImg },
      { id: 19, name: 'LED Monitor', category: 'Electronics', price: 7999, imageURL: monitorImg },
      { id: 20, name: 'Running Shoes', category: 'Footwear', price: 2199, imageURL: shoesImg },
    ];

    setProducts(fetchedProducts);
    setFiltered(fetchedProducts);
  }, []);

  useEffect(() => {
    let temp = products;
    if (selectedCategory !== 'All') {
      temp = temp.filter((p) => p.category === selectedCategory);
    }
    if (search) {
      temp = temp.filter((p) => p.name.toLowerCase().includes(search.toLowerCase()));
    }
    setFiltered(temp);
  }, [selectedCategory, search, products]);

  const categories = [...new Set(products.map((p) => p.category))];

  return (
    <div className="product-list-container">
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search products..."
          className="product-search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <Filters
          categories={categories}
          selected={selectedCategory}
          setSelected={setSelectedCategory}
        />
      </div>
      <div className="products-grid">
        {filtered.length ? (
          filtered.map((product) => <ProductCard key={product.id} product={product} />)
        ) : (
          <p>No products found.</p>
        )}
      </div>
    </div>
  );
};

export default ProductList;
