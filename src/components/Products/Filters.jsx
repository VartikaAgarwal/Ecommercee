import React from 'react';
import '../../styles/Filters.css';

const Filters = ({ categories, selected, setSelected }) => {
  return (
    <div className="filters-container">
      <h3 className="filters-title">Filter by Category</h3>
      <div className="filters-buttons">
        <button
          className={`filter-btn ${selected === 'All' ? 'active' : ''}`}
          onClick={() => setSelected('All')}
        >
          All
        </button>
        {categories.map((cat) => (
          <button
            key={cat}
            className={`filter-btn ${selected === cat ? 'active' : ''}`}
            onClick={() => setSelected(cat)}
          >
            {cat}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Filters;
