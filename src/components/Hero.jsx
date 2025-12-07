import React, { useState } from "react";
import { assets, cityList } from "../assets/assets";

const Hero = () => {
  const [pickupLocation, setPickupLocation] = useState("");

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gray-50 relative px-4">
      {/* Heading */}
      <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 text-center mb-10">
        Luxury Cars on Rent
      </h1>

      {/* Form */}
      <form
        className="
        w-full max-w-3xl bg-white p-6 rounded-xl shadow-md 
        flex flex-col gap-6 animate-fade-in
      "
      >
        {/* Row Inputs */}
        <div className="flex flex-col sm:flex-row gap-4 w-full">
          {/* Pickup Location */}
          <div className="flex flex-col w-full">
            <label className="text-sm font-medium text-gray-700 mb-1">
              Pickup Location
            </label>
            <select
              required
              value={pickupLocation}
              onChange={(e) => setPickupLocation(e.target.value)}
              className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">
                {pickupLocation ? pickupLocation : "Select Pickup Location"}
              </option>
              {cityList.map((city) => (
                <option key={city} value={city}>
                  {city}
                </option>
              ))}
            </select>
          </div>

          {/* Pickup Date */}
          <div className="flex flex-col w-full">
            <label className="text-sm font-medium text-gray-700 mb-1">
              Pick-Up Date
            </label>
            <input
              type="date"
              min={new Date().toISOString().split("T")[0]}
              required
              className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Return Date */}
          <div className="flex flex-col w-full">
            <label className="text-sm font-medium text-gray-700 mb-1">
              Return Date
            </label>
            <input
              type="date"
              required
              className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* Search Button */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition"
        >
          Search Cars
        </button>
      </form>

      {/* Car Image — Animated */}
      <div className="absolute bottom-0 w-full flex justify-center pb-10">
        <img
          src={assets.main_car}
          alt="car"
          className="max-h-80 object-contain drop-shadow-2xl animate-float"
        />
      </div>
      <style>{`
.animate-float {
animation: float 3s ease-in-out infinite;
}
@keyframes float {
0%, 100% { transform: translateY(0); }
50% { transform: translateY(-10px); }
}
`}</style>
    </div>
  );
};

export default Hero; 