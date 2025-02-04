"use client";
import Image from 'next/image';
import React from 'react';
import { useSelector } from 'react-redux';


interface Rating {
  rate: number;
  count: number;
}


interface FavouriteItem {
  id: number;
  name: {
    title: string;
    image: string;
    price: number;
    category: string;
    description: string;
    rating: Rating;
  };
}


interface RootState {
    favourites: {
      favourites: FavouriteItem[];
    };
  }
const Favourites = () => {

  const items = useSelector((state: RootState) => state.favourites);
    console.log(items.favourites );
    
  return (
    <div className="container mx-auto p-6 overflow-auto h-screen">
      <h1 className="text-3xl font-semibold text-center mb-8">Favorite Items</h1>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {items.favourites.map((item) => (
          <div key={item.id} className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-all">
            <Image
              src={item.name.image}
              alt={item.name.title}
              width={500}  
              height={200} 
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h2 className="text-xl font-semibold mb-2">{item.name.title}</h2>
            <p className="text-gray-500 mb-2">Price: <span className="font-bold">${item.name.price}</span></p>
            <p className="text-gray-600 mb-2">Category: {item.name.category}</p>
            <p className="text-gray-600 mb-4">{item.name.description}</p>
            <p className="text-gray-600">
              Rating: <span className="font-bold">{item.name.rating.rate}</span> ({item.name.rating.count} reviews)
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Favourites;
