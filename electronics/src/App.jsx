import { useEffect, useState } from 'react';
import './App.css';
import { Link } from 'react-router-dom';
import Navbar from './assets/components/NavBar/Navbar';

function App() {
  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/products");
      const data = await response.json();
      console.log('API Response:', data); 
      setProducts(data.product); 
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className='flex flex-col max-w-[1600px] h-full gap-20'>
      <Navbar onSearch={handleSearch} />

      <div className="ml-[100px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 items-center w-full h-full">
        {filteredProducts.slice(0, 100).map((item) => (
          <Link
            to={{
              pathname: `products/${item.id}`,
            }}
            state={{ 
              id: item.id, 
              gallery: item.gallery, 
              title: item.title, 
              price: item.price, 
              description: item.description, 
              category: item.category, 
              inventory: item.inventory 
            }}
            key={item.id}
          >
            <div key={item.id} className="card bg-white shadow-md rounded-lg overflow-hidden">
              <img src={item.gallery[0]} alt={item.title} className="w-full h-48 object-cover" />
              <div className="p-4 flex flex-col">
                <h2 className="card-title text-xl font-bold">{item.title}</h2>
                <p className="card-price text-lg text-gray-700">${item.price}</p>
                <p className="card-description text-sm text-gray-600">{item.description}</p>
                <p className="card-category text-sm text-gray-500">Category: {item.category}</p>
                <p className="card-inventory text-sm text-gray-500">In Stock: {item.inventory}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default App;
