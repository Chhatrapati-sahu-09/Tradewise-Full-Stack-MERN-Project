import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Hero from "../landing_page/home/Hero";

//Test Suite for Hero Component
describe("Hero Component", () => {
  test("renders Hero component with correct text", () => {
    render(<Hero />);
    const heroImage = screen.getByAltText("Hero Image");
    expect(heroImage).toBeInTheDocument();
    expect(heroImage).toHaveAttribute("src", "media/hero.png");
  });

  test("renders Hero component with button", () => {
    render(<Hero />);
    const buttonElement = screen.getByRole("button", { name: /Get Started/i });
    expect(buttonElement).toBeInTheDocument();
  });
});
