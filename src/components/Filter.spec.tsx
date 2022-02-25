import { render } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import renderer from "react-test-renderer";
import Theme from "../styles/Theme";
import Filter from "./Filter";

describe("Render filters container on page", () => {
  it("Should match filter snapshot", () => {
    const filter = renderer
      .create(
        <ThemeProvider theme={Theme}>
          <Filter setItemsPerPage={() => {}} filterItems={() => {}} />
        </ThemeProvider>
      )
      .toJSON();

    expect(filter).toMatchSnapshot();
  });

  it("Should render paginate filter", () => {
    const { getByText, getByLabelText } = render(
      <ThemeProvider theme={Theme}>
        <Filter setItemsPerPage={() => {}} filterItems={() => {}} />
      </ThemeProvider>
    );

    expect(getByText("Number of absences:")).toBeInTheDocument();
    expect(getByLabelText("items-per-page")).toBeInTheDocument();
  });

  it("Should render status filter", () => {
    const { getByText, getByLabelText, container } = render(
      <ThemeProvider theme={Theme}>
        <Filter setItemsPerPage={() => {}} filterItems={() => {}} />
      </ThemeProvider>
    );

    expect(getByText("Absence status:")).toBeInTheDocument();
    expect(getByLabelText("status")).toBeInTheDocument();
  });

  it("Should render start date filter", () => {
    const { getByText, getByLabelText } = render(
      <ThemeProvider theme={Theme}>
        <Filter setItemsPerPage={() => {}} filterItems={() => {}} />
      </ThemeProvider>
    );

    expect(getByText("Starting date:")).toBeInTheDocument();
    expect(getByLabelText("starting-date")).toBeInTheDocument();
  });

  it("Should render end date filter", () => {
    const { getByText, getByLabelText } = render(
      <ThemeProvider theme={Theme}>
        <Filter setItemsPerPage={() => {}} filterItems={() => {}} />
      </ThemeProvider>
    );

    expect(getByText("Ending date:")).toBeInTheDocument();
    expect(getByLabelText("ending-date")).toBeInTheDocument();
  });
});
