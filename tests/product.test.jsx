import { render, screen } from "@testing-library/react";
import { describe, test, expect } from "vitest";
import { vi } from "vitest";
import Product from "../src/components/product";

// Mock FontAwesomeIcon to avoid issues with SVG rendering in tests
vi.mock("@fortawesome/react-fontawesome", () => ({
  FontAwesomeIcon: () => null,
}));

describe("Product Component", () => {
  const mockItem = {
    id: 1,
    title: "Test Product",
    image: "test-image.jpg",
    rating: { rate: 4.5, count: 100 },
    price: 19.99,
  };

  const mockToDetails = vi.fn();
  render(<Product item={mockItem} toDetails={mockToDetails} />);

  test("renders product information correctly", () => {
    expect(screen.getByText("Test Product")).toBeInTheDocument();
    expect(screen.getByText("4.5")).toBeInTheDocument();
    expect(screen.getByText("(100)")).toBeInTheDocument();
    expect(screen.getByText("$19.99")).toBeInTheDocument();
    expect(screen.getByRole("img")).toHaveAttribute("src", "test-image.jpg");
  });
});
