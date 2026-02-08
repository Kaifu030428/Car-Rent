import React from "react";
import { assets } from "../assets/assets";

const CarCard = ({ car }) => {
  const currency = import.meta.env.VITE_CURRENCY || "$";

  return (
    <div
      className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-4 sm:p-6 md:p-8 border border-gray-100 hover:-translate-y-1"
      role="region"
      aria-labelledby={`car-title-${car.brand}-${car.model}`}
    >
      
      {/* Car Image */}
      <div className="relative">
        <img
          src={car.image}
          alt={`Image of ${car.brand} ${car.model}`}
          className="rounded-lg h-40 sm:h-48 md:h-56 w-full object-cover"
        />

        {car.isAvailable && (
          <p
            className="absolute top-2 sm:top-3 left-2 sm:left-3 bg-green-600 text-white text-xs sm:text-sm px-2 py-1 rounded-md shadow"
            aria-live="polite"
          >
            Available Now
          </p>
        )}
      </div>

      {/* Price */}
      <div className="flex items-end mt-3 sm:mt-4">
        <span className="text-lg sm:text-xl font-bold text-gray-800">
          {currency}
          {car.pricePerDay}
        </span>
        <span className="text-xs sm:text-sm text-gray-500 ml-1">/ day</span>
      </div>

      {/* Brand + Model */}
      <div className="mt-2">
        <h3
          id={`car-title-${car.brand}-${car.model}`}
          className="text-md sm:text-lg font-semibold text-gray-800"
        >
          {car.brand} {car.model}
        </h3>
        <p className="text-xs sm:text-sm text-gray-500">
          {car.category} • {car.year}
        </p>
      </div>

      {/* Features Row */}
      <div className="grid grid-cols-2 gap-2 sm:gap-3 mt-3 sm:mt-4 text-xs sm:text-sm text-gray-700">
        
        <div className="flex items-center gap-1 sm:gap-2">
          <img src={assets.users_icon} alt="" className="h-3 sm:h-4" />
          <span>{car.seating_capacity} Seats</span>
        </div>

        <div className="flex items-center gap-1 sm:gap-2">
          <img src={assets.fuel_icon} alt="" className="h-3 sm:h-4" />
          <span>{car.fuel_type}</span>
        </div>

        <div className="flex items-center gap-1 sm:gap-2">
          <img src={assets.car_icon} alt="" className="h-3 sm:h-4" />
          <span>{car.transmission}</span>
        </div>

        <div className="flex items-center gap-1 sm:gap-2">
          <img src={assets.location_icon} alt="" className="h-3 sm:h-4" />
          <span>{car.location}</span>
        </div>

      </div>

      <button
        className="mt-4 bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-700 transition"
        onClick={() => alert(`Booking car: ${car.brand} ${car.model}`)}
      >
        Book Now
      </button>
    </div>
  );
};

export default CarCard;
