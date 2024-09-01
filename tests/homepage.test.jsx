import { render, screen } from "@testing-library/react";
import { describe, test, expect } from "vitest";
import { vi } from "vitest";
import { BrowserRouter } from "react-router-dom";
import Homepage from "../src/components/homepage";

// Mock useNavigate
const mockNavigate = vi.fn();
vi.mock("react-router-dom", async () => {
  const actual = await vi.importActual("react-router-dom");
  return {
    ...actual,
    useNavigate: () => mockNavigate,
  };
});

describe("Homepage Component", () => {
  render(
    <BrowserRouter>
      <Homepage />
    </BrowserRouter>
  );

  test("renders main motto", () => {
    expect(screen.getByText("Where shopping")).toBeInTheDocument();
    expect(screen.getByText("meets")).toBeInTheDocument();
    expect(screen.getByText("JOY")).toBeInTheDocument();
  });
});
