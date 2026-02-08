import { render, screen, fireEvent } from "@testing-library/react";
import Hero from "./Hero";

describe("Hero Component", () => {
  test("renders Hero component correctly", () => {
    render(<Hero />);
    expect(screen.getByText(/Luxury Cars on Rent/i)).toBeInTheDocument();
    expect(screen.getByText(/Search Cars/i)).toBeInTheDocument();
  });

  test("shows error when form is submitted with missing fields", () => {
    render(<Hero />);
    fireEvent.click(screen.getByText(/Search Cars/i));
    expect(screen.getByText(/Please select a pickup location./i)).toBeInTheDocument();
  });
});