import './App.css';
import 'C:/Users/haree/Desktop/react-ecomers/node_modules/bootstrap/dist/css/bootstrap.min.css'
import { useDispatch, useSelector } from 'react-redux';
import CategorySelector from './components/CategorySelector';
import ProductList from './components/ProductList';
import Search from './components/Search';
import { useEffect } from 'react';



const App = () => {
  const dispatch = useDispatch();
  const products = useSelector(state => state.products.products);
  const categories = useSelector(state => state.categories.categories);

  useEffect(() => {
    const fetchCategories = async () => {
      const res = await fetch('https://dummyjson.com/products/categories');
      const data = await res.json();
      dispatch({ type: 'SET_CATEGORIES', payload: data });
    };

    fetchCategories();
  }, [dispatch]);

  return (
    <div className="container">
      <h1>Product List</h1>
      <CategorySelector />
      <Search />
      <ProductList products={products} />
    </div>
  );
};

export default App;
