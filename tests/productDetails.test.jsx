import { render, screen } from "@testing-library/react";
import { describe, test, expect } from "vitest";
import { vi } from "vitest";
import { BrowserRouter } from "react-router-dom";
import ProductDetails from "../src/components/productDetails";

// Mock react-router-dom hooks
vi.mock("react-router-dom", async () => {
  const actual = await vi.importActual("react-router-dom");
  return {
    ...actual,
    useNavigate: () => vi.fn(),
    useOutletContext: () => [[], vi.fn()],
    useLocation: () => ({
      state: {
        product: {
          id: 1,
          title: "Test Product",
          image: "test-image.jpg",
          rating: { rate: 4.5, count: 100 },
          price: 19.99,
          description: "Test description",
        },
      },
    }),
  };
});

// Mock FontAwesomeIcon to avoid issues with SVG rendering in tests
vi.mock("@fortawesome/react-fontawesome", () => ({
  FontAwesomeIcon: () => null,
}));

describe("ProductDetails Component", () => {
  render(
    <BrowserRouter>
      <ProductDetails />
    </BrowserRouter>
  );

  test("renders product information correctly", () => {
    expect(screen.getByText("Test Product")).toBeInTheDocument();
    expect(screen.getByText("4.5")).toBeInTheDocument();
    expect(screen.getByText("(100)")).toBeInTheDocument();
    expect(screen.getByText("$19.99")).toBeInTheDocument();
    expect(screen.getByText("Test description")).toBeInTheDocument();
    expect(screen.getByRole("img")).toHaveAttribute("src", "test-image.jpg");
  });
});
