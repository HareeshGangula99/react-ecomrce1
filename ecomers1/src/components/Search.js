import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

const Search = () => {
  const [query, setQuery] = useState('');
  const dispatch = useDispatch();

  const handleSearch = async (e) => {
    e.preventDefault();
    const res = await fetch(`https://dummyjson.com/products/search?q=${query}`);
    const data = await res.json();
    dispatch({ type: 'SET_PRODUCTS', payload: { products: data.products, total: data.total } });
  };

  return (
    <form onSubmit={handleSearch}>
      <input
        type="text"
        className="form-control mb-3"
        placeholder="Search products..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </form>
  );
};

export default Search;
