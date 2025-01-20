import { addItem } from '@/redux/slice';
import Image from 'next/image';
import React from 'react';
import { useDispatch } from 'react-redux';

const Product = ({ item }: { item: { id: string; title: string; price: number; image: string; } }) => {
  const dispatch = useDispatch();

  const handleAddToFavorites = (product) => {
    dispatch(addItem(product));
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">

      <Image
  src={item.image}
  alt={item.title}
  width={500}  
  height={200} 
  className="w-full h-48 object-cover rounded-lg mb-4"
/>

      <h2 className="text-xl font-semibold mb-2 text-gray-800">{item.title}</h2>

      <p className="text-gray-600 mb-4">Price: <span className="font-bold">${item.price}</span></p>


      <div className="flex justify-center">
        <button
          onClick={() => handleAddToFavorites(item)}
          className="bg-red-500 text-white py-2 px-6 rounded-lg hover:bg-red-600 transition-all duration-300"
        >
          Add to Favorites
        </button>
      </div>
    </div>
  );
};

export default Product;
