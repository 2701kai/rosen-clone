import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { Select } from "./Select";

describe("Select", () => {
  const options = ["Option 1", "Option 2", "Option 3"];

  it("renders with options", () => {
    render(<Select value="Option 1" onChange={vi.fn()} options={options} />);

    const select = screen.getByRole("combobox");
    expect(select).toBeInTheDocument();
    expect(select).toHaveValue("Option 1");
  });

  it("renders all options", () => {
    render(<Select value="Option 1" onChange={vi.fn()} options={options} />);

    options.forEach((option) => {
      expect(screen.getByText(option)).toBeInTheDocument();
    });
  });

  it("calls onChange when selection changes", () => {
    const handleChange = vi.fn();
    render(<Select value="Option 1" onChange={handleChange} options={options} />);

    const select = screen.getByRole("combobox");
    fireEvent.change(select, { target: { value: "Option 2" } });

    expect(handleChange).toHaveBeenCalledWith("Option 2");
  });

  it("applies custom className", () => {
    render(
      <Select value="Option 1" onChange={vi.fn()} options={options} className="custom-class" />
    );

    const select = screen.getByRole("combobox");
    expect(select).toHaveClass("custom-class");
  });
});
