import React from 'react';
import { dummyCarData } from '../assets/assets';
import CarCard from '../components/CarCard';

const Cars = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
      {dummyCarData.map((car) => (
        <CarCard key={car._id} car={car} />
      ))}
    </div>
  );
};

export default Cars;
