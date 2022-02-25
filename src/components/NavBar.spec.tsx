import { render } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import renderer from "react-test-renderer";
import Theme from "../styles/Theme";
import NavBar from "./NavBar";

describe("Render NavBar on page", () => {
  it("Should match navbar snapshot", () => {
    const navbar = renderer
      .create(
        <ThemeProvider theme={Theme}>
          <NavBar />
        </ThemeProvider>
      )
      .toJSON();

    expect(navbar).toMatchSnapshot();
  });

  it("Should render logo", () => {
    const { getByAltText } = render(
      <ThemeProvider theme={Theme}>
        <NavBar />
      </ThemeProvider>
    );

    expect(getByAltText("Crewmeister's logo")).toBeInTheDocument();
  });

  it("Should render title", () => {
    const { getByText } = render(
      <ThemeProvider theme={Theme}>
        <NavBar />
      </ThemeProvider>
    );

    expect(getByText("Absence Manager")).toBeInTheDocument();
  });
});
