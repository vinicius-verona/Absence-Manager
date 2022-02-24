import { getByText, render } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import Theme from "../styles/Theme";
import Status from "./Status";

describe("Render absence' status", () => {
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
