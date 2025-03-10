import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useFetch from '../../../hooks/useFetch';
import './Search.css';

const Search = ({ toggleSearch }) => {
  const [query, setQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const navigate = useNavigate();

  const { data, loading, error } = useFetch(
    `api/products?populate=*&filters[title][$contains]=${query}`
  );

  useEffect(() => {
    if (data) {
      setSearchResults(data.data);
    }
  }, [data]);

  const handleSearch = (e) => {
    setQuery(e.target.value);
  };

  const handleProductClick = (id) => {
    navigate(`/product/${id}`);
    toggleSearch();
  };

  return (
    <div className="search-overlay">
      <div className="search-container">
        
        <button className="close-btn" onClick={toggleSearch}>&times;</button>
        <input
          type="text"
          className="search-input"
          placeholder="Search for products..."
          value={query}
          onChange={handleSearch}
        />
        {loading && <div>Loading...</div>}
        {error && <div>Error: {error.message}</div>}
        <div className="search-results">
          {searchResults.map((product) => (
            <div
              key={product.id}
              className="search-result-item"
              onClick={() => handleProductClick(product.id)}
            >
              <img src={`http://localhost:1337${product.img.url}`} alt={product.title} />
              <div>
                <h4>{product.title}</h4>
                <p>₹ {product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Search;