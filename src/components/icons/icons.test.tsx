import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import { ChevronRight, ChevronDown, SortIcon } from "./index";

describe("Icon Components", () => {
  describe("ChevronRight", () => {
    it("renders with default className", () => {
      const { container } = render(<ChevronRight />);
      const svg = container.querySelector("svg");
      expect(svg).toBeInTheDocument();
      expect(svg).toHaveClass("w-4", "h-4");
    });

    it("renders with custom className", () => {
      const { container } = render(<ChevronRight className="w-6 h-6" />);
      const svg = container.querySelector("svg");
      expect(svg).toHaveClass("w-6", "h-6");
    });
  });

  describe("ChevronDown", () => {
    it("renders with default className", () => {
      const { container } = render(<ChevronDown />);
      const svg = container.querySelector("svg");
      expect(svg).toBeInTheDocument();
      expect(svg).toHaveClass("w-3", "h-3");
    });
  });

  describe("SortIcon", () => {
    it("renders correctly", () => {
      const { container } = render(<SortIcon />);
      const svg = container.querySelector("svg");
      expect(svg).toBeInTheDocument();
    });
  });
});
