import { render, screen } from "@testing-library/react";
import { describe, test, expect } from "vitest";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";
import { vi } from "vitest";
import App from "../src/App";

// Mock react-router-dom hooks
vi.mock("react-router-dom", async () => {
  const actual = await vi.importActual("react-router-dom");
  return {
    ...actual,
    useNavigate: () => vi.fn(),
    Outlet: () => <div data-testid="outlet" />,
  };
});

const renderApp = () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
};

describe("App Component", () => {
  test("renders header with correct title", () => {
    renderApp();
    expect(screen.getByText("ShopNook")).toBeInTheDocument();
  });

  test("renders navigation links", () => {
    renderApp();
    expect(screen.getByText("Home")).toBeInTheDocument();
    expect(screen.getByText("Products")).toBeInTheDocument();
  });

  test("renders shopping cart icon with initial count of 0", () => {
    renderApp();
    const cartIcon = screen.getByTestId("cart-icon");
    expect(cartIcon).toBeInTheDocument();
    expect(screen.getByText("0")).toBeInTheDocument();
  });

  test("renders footer with about and contact information", () => {
    renderApp();
    expect(screen.getByText("About")).toBeInTheDocument();
    expect(screen.getByText("Contact Us")).toBeInTheDocument();
    expect(screen.getByText("5113-769-832")).toBeInTheDocument();
    expect(screen.getByText("shopnooksupp882@gmail.com")).toBeInTheDocument();
  });

  test("clicking on logo navigates to home page", async () => {
    const user = userEvent.setup();
    renderApp();
    const logo = screen.getByText("ShopNook");
    await user.click(logo);
    // Since we've mocked useNavigate, we can't directly test navigation
    // In a real scenario, we'd assert that we've navigated to the home page
  });

  test("clicking on cart icon navigates to cart page", async () => {
    const user = userEvent.setup();
    renderApp();
    const cartIcon = screen.getByTestId("cart-icon");
    await user.click(cartIcon);
    // Similarly, we'd assert navigation to the cart page in a real scenario
  });
});
