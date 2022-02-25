import { render, screen, waitFor } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import userEvent from "@testing-library/user-event";
import renderer from "react-test-renderer";
import Theme from "../styles/Theme";
import AbsenceDashboard from "./Absence-Dashboard";

describe("Render absence dashboard modal on page", () => {
  it("Should match dashboard snapshot", () => {
    const dashboard = renderer
      .create(
        <ThemeProvider theme={Theme}>
          <AbsenceDashboard />
        </ThemeProvider>
      )
      .toJSON();

    expect(dashboard).toMatchSnapshot();
  });

  it("Should render dashboard container", () => {
    const { getByTestId } = render(
      <ThemeProvider theme={Theme}>
        <AbsenceDashboard />
      </ThemeProvider>
    );

    expect(getByTestId("dashboard-container")).toBeInTheDocument();
  });

  it("Should render dashboard filter", () => {
    render(
      <ThemeProvider theme={Theme}>
        <AbsenceDashboard />
      </ThemeProvider>
    );

    expect(
      screen.getByTestId("dashboard-content-container")
    ).toBeInTheDocument();
  });

  it("Should render total number of absences", () => {
    const { getByText } = render(
      <ThemeProvider theme={Theme}>
        <AbsenceDashboard />
      </ThemeProvider>
    );

    expect(getByText(/^Total number of absences/)).toBeInTheDocument();
  });

  it("Should render dashboard pagination", () => {
    const { container } = render(
      <ThemeProvider theme={Theme}>
        <AbsenceDashboard />
      </ThemeProvider>
    );

    expect(
      container.getElementsByClassName("pagination-container").length
    ).toBe(1);
  });

  it("Should change dashboard page", () => {
    const fst_page_absence_id = 2351;
    const scnd_page_absence_id = 3269;
    const { getByText, queryByText, getByLabelText } = render(
      <ThemeProvider theme={Theme}>
        <AbsenceDashboard />
      </ThemeProvider>
    );

    expect(getByText(fst_page_absence_id)).toBeInTheDocument();

    userEvent.click(getByLabelText("Next page"));

    waitFor(() => {
      expect(queryByText(fst_page_absence_id)).not.toBeInTheDocument();
      expect(queryByText(scnd_page_absence_id)).toBeInTheDocument();
    });
  });
});
