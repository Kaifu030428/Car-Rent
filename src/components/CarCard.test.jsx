import { render, screen } from "@testing-library/react";
import CarCard from "./CarCard";

const mockCar = {
  image: "car_image1.png",
  isAvailable: true,
  priceperDay: 100,
  brand: "Toyota",
  model: "Corolla",
  category: "Sedan",
  year: 2021,
  seating_capacity: 4,
  fuel_type: "Petrol",
  transmission: "Automatic",
  location: "Mumbai",
};

describe("CarCard Component", () => {
  test("renders CarCard component correctly", () => {
    render(<CarCard car={mockCar} />);
    expect(screen.getByText(/Toyota Corolla/i)).toBeInTheDocument();
    expect(screen.getByText(/100/i)).toBeInTheDocument();
    expect(screen.getByText(/Available Now/i)).toBeInTheDocument();
  });
});