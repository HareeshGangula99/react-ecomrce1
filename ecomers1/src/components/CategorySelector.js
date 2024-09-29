import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

const CategorySelector = () => {
  const dispatch = useDispatch();
  const categories = useSelector(state => state.categories.categories);
  
  const handleSelect = async (category) => {
    const res = await fetch(`https://dummyjson.com/products/category/${category}`);
    const data = await res.json();
    dispatch({ type: 'SET_PRODUCTS', payload: { products: data.products, total: data.total } });
  };

  return (
    <select className="form-select" onChange={(e) => handleSelect(e.target.value)}>
      <option value="">All Categories</option>
      {categories.map((category) => (
        <option key={category} value={category}>{category}</option>
      ))}
    </select>
  );
};

export default CategorySelector;
