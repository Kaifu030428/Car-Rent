import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import NavBar from "./NavBar";

describe("NavBar Component", () => {
  test("renders NavBar component correctly", () => {
    render(
      <BrowserRouter>
        <NavBar setShowLogin={jest.fn()} />
      </BrowserRouter>
    );
    expect(screen.getByAltText(/logo/i)).toBeInTheDocument();
    expect(screen.getByText(/Home/i)).toBeInTheDocument();
    expect(screen.getByText(/Cars/i)).toBeInTheDocument();
    expect(screen.getByText(/My Bookings/i)).toBeInTheDocument();
  });
});