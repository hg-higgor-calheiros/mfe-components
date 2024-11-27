import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders This is my home page text", () => {
  render(<App />);
  const linkElement = screen.getByText(/This is my home page/i);
  expect(linkElement).toBeInTheDocument();
});
