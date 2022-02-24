import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import Theme from "../styles/Theme";
import AbsenceDashboard from "./Absence-Dashboard";

describe("Render absence dashboard modal on page", () => {
  it("Should render dashboard container", async () => {
    const { getByTestId } = render(
      <ThemeProvider theme={Theme}>
        <AbsenceDashboard />
      </ThemeProvider>
    );

    expect(getByTestId("dashboard-container")).toBeInTheDocument();
  });

  it("Should render dashboard filter", async () => {
    render(
      <ThemeProvider theme={Theme}>
        <AbsenceDashboard />
      </ThemeProvider>
    );

    expect(
      screen.getByTestId("dashboard-content-container")
    ).toBeInTheDocument();
  });

  it("Should render total number of absences", async () => {
    const { getByText } = render(
      <ThemeProvider theme={Theme}>
        <AbsenceDashboard />
      </ThemeProvider>
    );

    expect(getByText(/^Total number of absences/)).toBeInTheDocument();
  });

  it("Should render dashboard pagination", async () => {
    const { container } = render(
      <ThemeProvider theme={Theme}>
        <AbsenceDashboard />
      </ThemeProvider>
    );

    expect(
      container.getElementsByClassName("pagination-container").length
    ).toBe(1);
  });
});
