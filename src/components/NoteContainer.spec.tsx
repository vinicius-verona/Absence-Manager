import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import renderer from "react-test-renderer";
import Theme from "../styles/Theme";
import NoteContainer from "./NoteContainer";

describe("Render absence' note container", () => {
  it("Should match note container snapshot", () => {
    const container = renderer
      .create(
        <ThemeProvider theme={Theme}>
          <NoteContainer label={"Member:"} content={""} />
        </ThemeProvider>
      )
      .toJSON();

    expect(container).toMatchSnapshot();
  });

  it("Should render label 'Member:'", () => {
    const { getByText } = render(
      <ThemeProvider theme={Theme}>
        <NoteContainer label={"Member:"} content={""} />
      </ThemeProvider>
    );

    expect(getByText("Member:")).toBeInTheDocument();
  });

  it("Should render note 'Member Test Note'", () => {
    const { getByText } = render(
      <ThemeProvider theme={Theme}>
        <NoteContainer label={""} content={"Member Test Note"} />
      </ThemeProvider>
    );

    expect(getByText("Member Test Note")).toBeInTheDocument();
  });

  it("Should render note label by parameter", async () => {
    const { getByText, rerender } = render(
      <ThemeProvider theme={Theme}>
        <NoteContainer label={"Member:"} content={""} />
      </ThemeProvider>
    );

    expect(getByText("Member:")).toBeInTheDocument();

    rerender(
      <ThemeProvider theme={Theme}>
        <NoteContainer label={"Admitter:"} content={""} />
      </ThemeProvider>
    );

    expect(screen.queryByText("Member:")).not.toBeInTheDocument();
    expect(screen.getByText("Admitter:")).toBeInTheDocument();
  });

  it("Should render note content by parameter", async () => {
    const { getByText, rerender } = render(
      <ThemeProvider theme={Theme}>
        <NoteContainer label={""} content={"Member Test Note"} />
      </ThemeProvider>
    );

    expect(getByText("Member Test Note")).toBeInTheDocument();

    rerender(
      <ThemeProvider theme={Theme}>
        <NoteContainer label={""} content={"Admitter Test Note"} />
      </ThemeProvider>
    );

    expect(screen.queryByText("Member Test Note")).not.toBeInTheDocument();
    expect(screen.getByText("Admitter Test Note")).toBeInTheDocument();
  });
});
