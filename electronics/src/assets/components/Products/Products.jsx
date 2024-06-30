import { useLocation, useParams } from 'react-router-dom';
import './styles.scss'

const Products = () => {
    const path = useParams();
  const { state } = useLocation();
console.log(state);

  return (
<>

  <div key={state.id} className=" flex flex-col bg-white shadow-md rounded-lg overflow-hidden w-lg h-full items-center">
    <img src={state.gallery[0]} alt={state.title} className="w-1/3 h-1/4 object-cover" />
    <div className="p-4 h-1/2 overflow-auto">
      <h2 className="card-title text-xl font-bold">{state.title}</h2>
      <p className="card-price text-lg text-gray-700">${state.price}</p>
      <p className="card-description text-sm text-gray-600">{state.description}</p>
      <p className="card-category text-sm text-gray-500">Category: {state.category}</p>
      <p className="card-inventory text-sm text-gray-500">In Stock: {state.inventory}</p>
    </div>
  </div>
  
</>

  );
};


export default Products