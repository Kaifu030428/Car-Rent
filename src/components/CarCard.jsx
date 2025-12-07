import React from "react";
import { assets } from "../assets/assets";

const CarCard = ({ car }) => {
  const currency = import.meta.env.VITE_CURRENCY;

  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-4 border border-gray-100 hover:-translate-y-1">
      
      {/* Car Image */}
      <div className="relative">
        <img
          src={car.image}
          alt="Car img"
          className="rounded-lg h-48 w-full object-cover"
        />

        {car.isAvailable && (
          <p className="absolute top-3 left-3 bg-green-600 text-white text-xs px-2 py-1 rounded-md shadow">
            Available Now
          </p>
        )}
      </div>

      {/* Price */}
      <div className="flex items-end mt-4">
        <span className="text-xl font-bold text-gray-800">
          {currency}
          {car.priceperDay}
        </span>
        <span className="text-sm text-gray-500 ml-1">/ day</span>
      </div>

      {/* Brand + Model */}
      <div className="mt-2">
        <h3 className="text-lg font-semibold text-gray-800">
          {car.brand} {car.model}
        </h3>
        <p className="text-sm text-gray-500">
          {car.category} • {car.year}
        </p>
      </div>

      {/* Features Row */}
      <div className="grid grid-cols-2 gap-3 mt-4 text-sm text-gray-700">
        
        <div className="flex items-center gap-2">
          <img src={assets.users_icon} alt="" className="h-4" />
          <span>{car.seating_capacity} Seats</span>
        </div>

        <div className="flex items-center gap-2">
          <img src={assets.fuel_icon} alt="" className="h-4" />
          <span>{car.fuel_type}</span>
        </div>

        <div className="flex items-center gap-2">
          <img src={assets.car_icon} alt="" className="h-4" />
          <span>{car.transmission}</span>
        </div>

        <div className="flex items-center gap-2">
          <img src={assets.location_icon} alt="" className="h-4" />
          <span>{car.location}</span>
        </div>

      </div>
    </div>
  );
};

export default CarCard;
