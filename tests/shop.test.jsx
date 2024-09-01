import { render, screen, waitFor } from "@testing-library/react";
import { describe, test, expect } from "vitest";
import userEvent from "@testing-library/user-event";
import { vi } from "vitest";
import { BrowserRouter } from "react-router-dom";
import Shop from "../src/components/shop";

// Mock child components
vi.mock("./product.jsx", () => ({
  default: ({ item }) => <div data-testid="product">{item.title}</div>,
}));

vi.mock("./loadingspinner.jsx", () => ({
  default: () => <div data-testid="loading-spinner">Loading...</div>,
}));

// Mock fetch

describe("Shop Component", () => {
  test("renders loading spinner initially", () => {
    render(
      <BrowserRouter>
        <Shop />
      </BrowserRouter>
    );
    expect(screen.getByTestId("loading-spinner")).toBeInTheDocument();
  });

  test("renders products after loading", async () => {
    render(
      <BrowserRouter>
        <Shop />
      </BrowserRouter>
    );

    await waitFor(() => {
      expect(screen.queryByTestId("loading-spinner")).not.toBeInTheDocument();
    });

    expect(screen.getByText("Solid Gold Petite Micropave")).toBeInTheDocument();
    expect(screen.getByText("Mens Casual Slim Fit")).toBeInTheDocument();
  });

  test("filters products when category is selected", async () => {
    const user = userEvent.setup();
    render(
      <BrowserRouter>
        <Shop />
      </BrowserRouter>
    );

    await waitFor(() => {
      expect(screen.queryByTestId("loading-spinner")).not.toBeInTheDocument();
    });

    const menCheckbox = screen.getByLabelText("jewelery");
    await user.click(menCheckbox);

    expect(screen.getByText("Solid Gold Petite Micropave")).toBeInTheDocument();
    expect(screen.queryByText("Mens Casual Slim Fit")).not.toBeInTheDocument();
  });

  test("clears filters when clear button is clicked", async () => {
    const user = userEvent.setup();
    render(
      <BrowserRouter>
        <Shop />
      </BrowserRouter>
    );

    await waitFor(() => {
      expect(screen.queryByTestId("loading-spinner")).not.toBeInTheDocument();
    });

    const menCheckbox = screen.getByLabelText("men's clothing");
    await user.click(menCheckbox);

    const clearButton = screen.getByText("Clear Filters");
    await user.click(clearButton);

    expect(screen.getByText("Solid Gold Petite Micropave")).toBeInTheDocument();
    expect(screen.getByText("Mens Casual Slim Fit")).toBeInTheDocument();
  });
});
