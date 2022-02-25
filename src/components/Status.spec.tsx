import { render } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import renderer from "react-test-renderer";
import Theme from "../styles/Theme";
import Status from "./Status";

describe("Render absence' status", () => {
  it("Should match status snapshot", () => {
    const status = renderer
      .create(
        <ThemeProvider theme={Theme}>
          <Status content={"Confirmed"} />
        </ThemeProvider>
      )
      .toJSON();

    expect(status).toMatchSnapshot();
  });

  it("Should render label", () => {
    const { getByText } = render(
      <ThemeProvider theme={Theme}>
        <Status content={"Confirmed"} />
      </ThemeProvider>
    );

    expect(getByText("Status:")).toBeInTheDocument();
  });

  it("Should render status content", () => {
    const { getByText } = render(
      <ThemeProvider theme={Theme}>
        <Status content={"Confirmed"} />
      </ThemeProvider>
    );

    expect(getByText("Confirmed")).toBeInTheDocument();
  });
});
