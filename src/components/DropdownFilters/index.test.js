import React from "react";
import { screen, render, fireEvent } from "@testing-library/react";
import DropdownFilters from "./index";

describe("DropdownFilters", () => {
  const mockOptions = ["Option 1", "Option 2", "Option 3"];
  const mockFilterChange = jest.fn();

  afterEach(() => {
    mockFilterChange.mockClear();
  });

  it("renders the label and options correctly", () => {
    render(
      <DropdownFilters
        types={mockOptions}
        onTypeFilterChange={mockFilterChange}
      />
    );
    const label = screen.getByText("Filter by:");
    const select = screen.getAllByRole("combobox")[0];
    expect(label).toBeInTheDocument();
    expect(select).toBeInTheDocument();
    expect(select).toHaveValue("");
    expect(select).toContainHTML('<option value="">All</option>');
    mockOptions.forEach((option) => {
      expect(select).toContainHTML(
        `<option value="${option}">${option}</option>`
      );
    });
  });

  it("calls the filter change function when an option is selected", () => {
    render(
      <DropdownFilters
        types={mockOptions}
        onTypeFilterChange={mockFilterChange}
      />
    );
    const select = screen.getAllByRole("combobox")[0];
    fireEvent.change(select, { target: { value: "Option 1" } });
    expect(mockFilterChange).toHaveBeenCalledTimes(1);
    expect(mockFilterChange).toHaveBeenCalledWith("Option 1");
  });
});
