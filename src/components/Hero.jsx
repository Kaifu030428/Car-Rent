import React, { useState } from "react";
import { assets, cityList } from "../assets/assets";

const today = new Date().toISOString().split("T")[0];

const Hero = () => {
  const [pickupLocation, setPickupLocation] = useState("");
  const [pickupDate, setPickupDate] = useState("");
  const [returnDate, setReturnDate] = useState("");

  const handleReturnDateChange = (e) => {
    const selectedReturnDate = e.target.value;
    if (pickupDate && new Date(selectedReturnDate) <= new Date(pickupDate)) {
      alert("Return date must be after the pickup date.");
      return;
    }
    setReturnDate(selectedReturnDate);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!pickupLocation) {
      alert("Please select a pickup location.");
      return;
    }

    if (!pickupDate) {
      alert("Please select a pickup date.");
      return;
    }

    if (!returnDate) {
      alert("Please select a return date.");
      return;
    }

    if (new Date(returnDate) <= new Date(pickupDate)) {
      alert("Return date must be after the pickup date.");
      return;
    }

    // Proceed with form submission logic
    alert("Form submitted successfully!");
  };

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gray-50 relative px-4 sm:px-8 md:px-16">
      {/* Heading */}
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 text-center mb-6 sm:mb-10">
        Luxury Cars on Rent
      </h1>

      {/* Form */}
      <form
        onSubmit={handleFormSubmit}
        aria-label="Car rental search form"
        className="
        w-full max-w-2xl sm:max-w-3xl bg-white p-4 sm:p-6 md:p-8 rounded-xl shadow-md 
        flex flex-col gap-4 sm:gap-6 animate-fade-in
      "
      >
        {/* Row Inputs */}
        <div className="flex flex-col sm:flex-row gap-4 w-full">
          {/* Pickup Location */}
          <div className="flex flex-col w-full">
            <label
              htmlFor="pickup-location"
              className="text-sm font-medium text-gray-700 mb-1"
            >
              Pickup Location
            </label>
            <select
              id="pickup-location"
              aria-required="true"
              required
              value={pickupLocation}
              onChange={(e) => setPickupLocation(e.target.value)}
              className="border border-gray-300 rounded-lg p-2 sm:p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
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
            <label
              htmlFor="pickup-date"
              className="text-sm font-medium text-gray-700 mb-1"
            >
              Pick-Up Date
            </label>
            <input
              id="pickup-date"
              aria-required="true"
              type="date"
              min={new Date().toISOString().split("T")[0]}
              required
              value={pickupDate}
              onChange={(e) => setPickupDate(e.target.value)}
              className="border border-gray-300 rounded-lg p-2 sm:p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Return Date */}
          <div className="flex flex-col w-full">
            <label
              htmlFor="return-date"
              className="text-sm font-medium text-gray-700 mb-1"
            >
              Return Date
            </label>
            <input
              id="return-date"
              aria-required="true"
              type="date"
              required
              value={returnDate}
              onChange={handleReturnDateChange}
              className="border border-gray-300 rounded-lg p-2 sm:p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* Search Button */}
        <button
          type="submit"
          aria-label="Search for available cars"
          className="w-full bg-blue-600 text-white font-semibold py-2 sm:py-3 rounded-lg hover:bg-blue-700 transition"
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